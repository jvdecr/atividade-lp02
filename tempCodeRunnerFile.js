const express = require("express");
const app = express();

const filmes = [
    { id: 1, titulo: "A Origem", ano: 2010, nota: 10 },
    { id: 2, titulo: "A Familia do Futuro", ano: 2007, nota: 9 },
    { id: 3, titulo: "Homem-Aranha", ano: 2002, nota: 8 },
    { id: 4, titulo: "Interestelar", ano: 2014, nota: 10 },
    { id: 5, titulo: "Click", ano: 2006, nota: 9 }
  ];

app.get("/filmes" , (req, res) => {
    res.json(filmes);
});

app.get("/filmes/:id", (req, res) => {
    const id = Number(req.params.id);
    const filme = filmes.find(f => f.id === id);

    if (filme) {
        res.json(filme);
    } else {
        res.status(404).send("num tem filmi :(");
    }
});

app.get("/bem-avaliados", (req, res) => {
    const filme = filmes.filter(f => f.nota >= 9);

    if (filme) {
        res.json(filme);
    } else {
        res.status(404).send("num tem filmi :(");
    }
});

const PORTA = 6767;
app.listen(PORTA, () =>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});