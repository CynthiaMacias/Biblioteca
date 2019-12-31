var express= require('express');
var app = express();
var path = require('path');
var server =require('http').Server(app);
var bodyparser= require('body-parser');
var logger = require('morgan');
const fetch = require("node-fetch");
server.listen(4545,function(){
    console.log("Servidor conectado")
});
app.use(bodyparser.urlencoded({
	extended: true
}));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.get('/hola-mundo',function(req,res){
    res.status(200).send('Hola mundo')
});
app.get('/',function(req,res){
    res.render('login',{
        msj:''
    })
})
app.get('/categoria',function(req,res){
    res.render('categoria',{
        msj:''
    })
})
app.get('/subcategoria',function(req,res){
    res.render('subcategoria',{
        msj:''
    })
})
app.get('/libros',function(req,res){
    res.render('libros',{
        msj:''
    })
})
app.get('/vlibros',function(req,res){
    res.render('vlibros',{
        msj:''
    })
})
app.get('/usuarios',function(req,res){
    res.render('usuarios',{
        msj:''
    })
})
app.get('/menu',function(req,res){
    res.render('menu',{
       	token: ''
    })
})
app.post('/postLog', function (req, res) {
	let response = fetch('http://localhost:5000/api/usuarios/Login', {
		method: 'POST',
		body: JSON.stringify(req.body),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	response
		.then(data => {
			return data.json(data);
		})
		.then(data => {
         
            let response = Object.keys(data);
               console.log(response)
			if (response[0] === "Error") {
				res.render('login', {
					msj: 'error'
                });                
			} else {
				res.render('menu.ejs', {
					token: data
				});
			}
		});
});

