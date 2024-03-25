const express = require('express');
const path = require('path');

const app = express();

function viewhome(req, res) {
    res.status(200);
    res.sendfile(path.join(__dirname,'static/home.html'));
}

function viewconsulta(req, res){
    res.status(200);
    res.sendfile(path.join(__dirname,'static/consulta.html'));
}

function gerargabarito(req, res){
    let nome = req.query.aluno;
    let id = req.query.idprova;
    let modelo = `
    <html>
    <head>
    </head>
    <body>
    ${new Date()}
    ALUNO: ${nome}\n
    PROVA ID: ${id}\n
    GABARITO\n
    </body>
    </html>
    `;
    res.status(200);
    res.send(modelo);
}

// app.get('/', (req, res)=>{
//     res.status(200);
//     res.send('site funcionando via fat arrow');
// });

app.get('/', viewhome);
app.get('/consulta', viewconsulta);
app.get('/gabarito',gerargabarito )

app.listen(8005, ()=>{
    console.log('servidor rodando...')
});