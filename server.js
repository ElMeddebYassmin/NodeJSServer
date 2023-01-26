var http = require('http');
var url = require('url');
var queryString = require('querystring');

var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    var params = queryString.parse(url.parse(req.url).query);

    res.writeHead(200, {"Content-Type":"text/plain"});

    if (page == "/") {
        res.write("Vous etes dans la page d\'acceuil");
    } else if (page == "/Contrat") {
        res.write("Vous etes dans la page contrat !");
    } else if (page == "/Affichage/:id/:login") {
    if('id' in params && 'login' in params){
        //console.log(params['id']);
        res.write("Votre id est"+ params['id']+ "et votre login est"+ params['login']);
    }else{
        res.write('Veuillez saisir votre id et login !');
    }}else {
            res.writeHead(404);
        }



    // res.write('<!DOCTYPE html>' +
    //     '<html>' +
    //     '<head>' +
    //     '<meta charset="utf8" />' +
    //     '<title> Ma page NodeJS ! </title>' +
    //     '</head>' +
    //     '<body>' +
    //     '<p> Voici un paragraphe <strong> HTML </strong> ! </p>' +
    //     '</body>' +
    //     '</body>');
    res.end();
});

server.listen(8070);