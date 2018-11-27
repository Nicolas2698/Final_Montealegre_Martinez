/*app.get('/agregarDocumento', function(req, res){
    const collection = db.collection('albums');

    collection.insert({
       //datos del documento 
    }), function(err, res){
        if(err){
            console.error(err);
            response.send(err);
            return;
        }

        response.send("yey se agrego!");
    };
});*/



const express = require('express'),
  
    MongoClient = require('mongodb').MongoClient;
//ObjectID = require('mongodb').ObjectID;
const hbs = require('express-handlebars');


var app = express();

const dbName = 'tienda';

app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use(express.json());

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db(dbName);

    app.listen(3000);
});

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/carro", function(req, res){
    res.render("carro");
});

app.get('/tienda', function (req, res) {
    const collection = db.collection('productos');
    const collectionTwo = db.collection('albums');
    let dokss;

    collectionTwo.find().toArray(function (err, doks) {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        dokss = doks;
    });

    collection.find().toArray(function (err, docs) {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }


        const contexto = {
            products: docs,
            albums: dokss
        };

        //console.log(docs)
        res.render('tienda', contexto);
    });


});

app.get("/tienda/album", function (req, res) {
    var nombreProducto = req.query.title;
    console.log(nombreProducto);
    const collectionTwo = db.collection('albums');
    collectionTwo.find({}).toArray(function(err, docs){
        var cualquiera = docs.find(function(obj){
           return obj.title == nombreProducto; 
        });
        res.render('albums', cualquiera);
    });
});

app.get("/tienda/producto", function (req, res) {
    var nombreProducto = req.query.name;
    console.log("///////////");
    console.log(nombreProducto);
    const collection = db.collection('productos');
    collection.find({}).toArray(function(err, docs){
        var cualquiera = docs.find(function(obj){
           return obj.name == nombreProducto; 
        });
        res.render('merchan', cualquiera);
    });
});