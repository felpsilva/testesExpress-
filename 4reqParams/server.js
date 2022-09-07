const { application } = require('express');
const express = require('express');
const app = express();

// app.get('/',(req, res)=>{
//     res.send('Hello, world!')
// });

app.use(express.urlencoded(
        {
            extended: true  
        }
    )
);// serve para tratar os dados enviados a partir de um input
app.get('/', (req, res) =>{
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <br>
    Sobrenome: <input type="text" name="sobrenome">
    <br>
    <button>Enviar Formulário</button>
    </form>
    `)
});
app.post('/', (req, res) => {
    console.log(req.body.nome)
    console.log(req.body.sobrenome)

    res.send(`${req.body.nome} ${req.body.sobrenome} cadastrado!`)
})

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000');
    console.log('servidor execultando na porta 3000');
});


//npm install nodemon --save-dev
