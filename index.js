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

MongoClient.connect('mongodb+srv://cluster0-c5bcf.mongodb.net/canciones', 
{
    auth:{
        user: 'nicolas2698@outlook.com',
        password: 'a00056848'

    }
},

function (err, client) {
    if (err) throw err;

    db = client.db('canciones');

    app.listen(process.env.PORT || 1234);
});

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/carro", function(req, res){
    res.render("carro");
});

app.get("/trans", function(req, res){
    res.render("trans");
});


app.get('/tienda', function (req, res) {
    const collection = db.collection('products');
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

app.get("/1interaccion", function(req, res){
    const coleAlbum1 = db.collection('canciones').find();
    const coleAlbum2 = db.collection('canciones').find();
    const coleAlbum3 = db.collection('canciones').find();
    const coleAlbum4 = db.collection('canciones').find();

 
        coleAlbum1.filter({
            album: "Pray for the Wicked"
    });

    coleAlbum2.filter({
        album: "Death of a Bachelor"
});

coleAlbum3.filter({
    album: "Too Weird to Live, Too Rare to Die!"
});

coleAlbum4.filter({
    album: "Vices and Virtues"
});
    coleAlbum1.toArray(function (err, songsAlbum1) {
        coleAlbum2.toArray(function(err,songsAlbum2){
            coleAlbum3.toArray(function(err,songsAlbum3){
                coleAlbum4.toArray(function(err,songsAlbum4){
               
       
  
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
       // const contexto = {
         //   canciones: docs,
        //};

        res.render('principal', {
            cancionesAlbum1: songsAlbum1 ,
            cancionesAlbum2: songsAlbum2,
            cancionesAlbum3: songsAlbum3,
            cancionesAlbum4: songsAlbum4
            });
                 
        });
           
        });
        });
    });
  
});

app.get("/principal/cancion/:id", function (req, res) {
    console.log(req.params.id);
    var idd = parseInt(req.params.id);
    const collection = db.collection('canciones');

    collection.find({id: idd}).toArray(function(err, songs){
        
        res.render('reproductor', {cancion: songs[0]});
    });
});
