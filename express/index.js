const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const app        = express();

const PORTA = 8081;

let alunos = [
  {
    "id": 0,
    "nome": "gabripo",
    "imagem": "https://static-cdn.jtvnw.net/jtv_user_pictures/3df5ec61-1d7c-4bd9-ac93-c39e97f30c74-profile_image-300x300.png"
  },
  {
    "id": 1,
    "nome": "muca",
    "imagem": "https://i.redd.it/rj9ksm3681d51.jpg"
  },
  {
    "id": 2,
    "nome": "yulla",
    "imagem": "https://static-cdn.jtvnw.net/jtv_user_pictures/2e2a9b6a-067e-4a54-ad2f-9adebc9d659a-profile_image-300x300.png"
  }
];

app.use(bodyParser.json());
app.use(cors());

app.get("/alunos", (req, resposta) => {
    resposta.send(alunos);
});

app.post("/alunos", (req, res) => {
    const aluno = req.body;
    aluno.id = alunos.length;
    alunos.push(aluno);
    res.sendStatus(201);
});

app.put("/alunos/:id", (req, res) => {
    const { id } = req.params;
    const { nome, imagem } = req.body;
    alunos[id] = { id, nome, imagem };
    res.send(alunos[id]);
});

// exemplos
// coringa -> localhost:/item/1
// path parametro -> id = 1 
// meet.google.com/jvq-yddd-yvw
// meet.google.com/:sala

app.get("/item/:id", (req, res) => {
    const id = req.params.id;

    // busca item do array por id
    const item = items.find(pam => pam.id == id);
    
    if(item) {
        res.send(item);
    } else {
        res.sendStatus(404);
    }
});

// inicializa servidor http na porta PORTA
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
