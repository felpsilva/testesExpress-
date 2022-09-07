exports.paginaInicial = (req, res) => {
    res.send('<form action="/" method="POST">Nome: <input type="text" name:"nome" id="nome"><button>Enviar Formulário</button></form>')
};

exports.trataPost = (req, res) =>{
    res.send(`cadastrado!`)
}

