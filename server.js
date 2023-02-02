var http = require('http');
var url = require('url');
var queryString = require('querystring');

// createServer créé une instance sur le terminal pour executer toute l'app
var server = http.createServer(function (req, res) {




    var page = url.parse(req.url).pathname;
    var params = queryString.parse(url.parse(req.url).query); // 

    //res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Ma page node.js</title></head><body><p> Voici un paragraphe <strong>HTML</strong></p></body></html>')
    res.writeHead(200, {"Content-Type":"text/plain"});

        // //console.log(req.url);
        // const appPath = url.parse(req.url);
        // if(appPath.pathname === '/users'){
        //     res.end("Linterafce users")
        // }else{
        //     res.end('not found !')
        // }


    if (page == "/") {
        res.write("Vous etes dans la page d\'acceuil");
    } else if (page == "/Contrat") {
        res.write("Vous etes dans la page contrat !");
    } else if (page == "/Affichage/1/hello") {
    if('id' in params && 'login' in params){
        //console.log(params['id']);
        res.write("Votre id est"+ params['id']+ "et votre login est"+ params['login']);
    }else{
        res.write('Veuillez saisir votre id et login !');
    }}else {
            res.writeHead(404); // fermer la requete 
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

server.listen(5000, ()=>{
    console.log("Hello Yassmoun !");
});