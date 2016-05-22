
var express = require('express');
var http = require('http');

var swig = require('swig');
var swig = new swig.Swig();


var list = require('./listFilm.js');

var app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded());     // to support URL-encoded bodies

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});


app.set('views', './');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


var port = process.env.PORT || '3000';
app.set('port', port);


var getByName = function(name, inList){
    return inList.find(function(item){return item.name == name});
};

var getIndexByName = function(name, inList){
    return inList.indexOf(inList.find(function(item){return item.name == name}));
};

app.get('/', function(req,res){
    res.render('../src/index.html');
});

app.get('/films', function(req,res){
    res.send(JSON.stringify(list));
});

app.get('/films/:name', function(req,res){
    res.send(JSON.stringify(getByName(req.params['name'], list)));
});

app.get('/films/:name/actors', function(req,res){
    res.send(JSON.stringify(getByName(req.params['name'], list).actors));
});

app.get('/films/:name/actors/:actorsName', function(req,res){
    res.send(JSON.stringify(getByName(req.params['actorsName'],getByName(req.params['name'], list).actors)));
});

app.post('/films', function(req, res){
    if(req.body.name && !list[req.body.name]){
        list.push({name: req.body.name,
            affiche: req.body.affiche,
            realisator: req.body.realisator,
            actors: req.body.actors,
            releaseDate: req.body.releaseDate,
            rating: req.body.rating});
        res.send(JSON.stringify(getIndexByName(name,list)));
    }else{
        res.status(404).send("-1");
    }
});

app.post('/films/:name/actors', function(req, res){
    var actor = JSON.parse(req.body);
    if(req.params['name'] && req.body && actor.name && !list[list.indexOf(req.body)].actors[actor.name]){
        list[list.indexOf(req.body)].actors.push({name: actor.name});
        res.send(JSON.stringify(getIndexByName(actor.name,list[list.indexOf(req.body)].actors)));
    }else{
        res.status(404).send("-1");
    }
});

app.put('/films/:name', function(req,res){
        if (req.params['name'] && list[getIndexByName(req.params['name'], list)]) {
            var index = getIndexByName(req.params['name'], list);
            if (req.body.name)
                list[index].name = req.body.name;
            if (req.body.affiche)
                list[index].affiche = req.body.affiche;
            if (req.body.realisator)
                list[index].realisator = req.body.realisator;
            if (req.body.actors)
                list[index].actors = req.body.actors;
            if (req.body.releaseDate)
                list[index].releaseDate = req.body.releaseDate;
            if (req.body.rating)
                list[index].rating = req.body.rating;
            res.send(JSON.stringify(list[getIndexByName(req.params['name'], list)]));
        } else {
            res.send("can't put " + req.params['name']);
        }
    }
);

app.patch('/films/:name', function(req,res){
    if (req.params['name'] && list[getIndexByName(req.params['name'], list)]) {
        var index = getIndexByName(req.params['name'], list);//
        if (req.body.name)
            list[index].name = req.body.name;
        if (req.body.affiche)
            list[index].affiche = req.body.affiche;
        if (req.body.realisator)
            list[index].realisator = req.body.realisator;
        if (req.body.actors)
            list[index].actors = req.body.actors;
        if (req.body.releaseDate)
            list[index].releaseDate = req.body.releaseDate;
        if (req.body.rating)
            list[index].rating = req.body.rating;
        res.send(JSON.stringify(list[getIndexByName(req.params['name'], list)]));
    } else {
        res.send("can't patch " + req.params['name']);
    }
});


app.put('/films/:name/actors/:actorName', function(req){
    if(req.params['name']){
        list[getIndexByName(req.params['name'],list)].actors[req.params['actorName']].name = JSON.parse(req.body).name;
        res.send(JSON.stringify(list[getIndexByName(req.params['name'], list)].actors[req.params['actorName']]));
    } else {
        res.send("can't " + type + " " + req.params['name']);
    }
});

app.delete('/films/:name', function(req,res){
    var index = getIndexByName(req.params['name'],list);
    if(index != -1){
        list.splice(index,1);
        res.send('done');
    }else{
        res.send('impossible, film not found');
    }
});

app.delete('/films/:name/actors/:actorName', function(req,res){
    var index = getIndexByName(req.params['name'],list);
    if(index != -1){
        var actorName = req.params['actorName'];
        var index2 = list[index].actors.indexOf(getByName(actorName, list[index].actors));
        if(index2 != -1){
            list[index].actors.splice(index2,1);
            res.send('done');
        }
        else{
            res.send('impossible, actor not found');
        }
    }else{
        res.send('impossible, film not found');
    }
});

http.createServer(app).listen(port, function (err) {
    console.log('listening in http://localhost:' + port);
});

module.exports = app;

