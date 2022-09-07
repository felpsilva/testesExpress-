const express = require('express');
const app = express();
const routes = require('./routes');

// app.get('/',(req, res)=>{
//     res.send('Hello, world!')
// });

// app.post('/', (req, res) => {
//     res.send('Recebi o formulário')
// })
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000');
    console.log('servidor execultando na porta 3000');
});


//npm install nodemon --save-dev
