//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//definimos el motor de plantillas
//no de vamos a emplear MVC  (vista a utilizar HBS)
app.set('view engine', 'hbs');

//vamos a generar los partials
hbs.registerPartials(__dirname +'/views/partials');

//generar el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor:'Abraham Daz Burrola',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/rembrant', (req, res)=>{
    res.render('rembrant', {
        autor : 'Abraham Diaz Burrola',
        year : new Date().getFullYear(),
        title : 'Rembrandt Harmenszoon van Rijn'
    });
});

app.get('/vangogh', (req, res)=>{
    res.render('vangogh', {
        autor : 'Abraham Diaz Burrola',
        year : new Date().getFullYear(),
        title : 'Vincent Willem van Gogh'
    });
});

app.get('/vinci', (req, res)=>{
    res.render('vinci', {
        autor : 'Abraham Diaz Burrola',
        year: new Date().getFullYear(),
        title: 'Leonardo da Vinci'
    });
});

app.get('/picasso', (req, res)=>{
    res.render('picasso', {
        autor : 'Abraham Diaz Burrola',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso'
    });
});

//Arrancamos el ervidor web
app.listen(3002, ()=>{
    console.log('Escuchando el puerto 3002');
});