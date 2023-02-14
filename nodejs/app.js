const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const mongodb = require("mongodb");

// /{user}/{id}

app.use(bodyParser.urlencoded(
    {
        extended: false
    }
));

app.post("/register", function (request, response) {
    let client = new mongodb.MongoClient("mongodb://localhost:27017");
    let db = client.db("SalamGagash");
    let collection = db.collection("Gagashes");

    collection.insertOne({
        login: request.body["login"],
        password: request.body["password"]
    });


    response.writeHead(200);
    response.end();
});

app.post("/login", async function (request, response)
{
    let client = new mongodb.MongoClient("mongodb://localhost:27017");
    let db = client.db("SalamGagash");
    let collection = db.collection("Gagashes");

    let result = await collection.findOne({
        login: request.body["login"],
        password: request.body["password"]
    });

    if (result == null)
    {
        response.writeHead(404);
        response.end();
    }
    else
    {
        response.redirect("index.html");
    }
});

app.get("/:page", function (request, response) {
    let page = request.params["page"];
    let filePath = path.join(__dirname, "pages", page);

    fs.exists(filePath, function (result) {
        if (!result) {
            response.send("Page does not exist");
        } else {
            let readStream = fs.createReadStream(filePath);

            readStream.pipe(response);
        }
    });
});

// {controller}/{action}
// app.get("/:page", function (request, response)
// {
//     let queryString = JSON.stringify(request.query);
//     let paramsString = JSON.stringify(request.params);
//
//     response.send(`Params: ${paramsString}\nQuery: ${queryString}`);
// });

app.listen(8080);


// const server = http.createServer(function (request, response) {
//     if (request.url.toString() == "/upload" && request.method == "post")
//     {
//         let writeStream = fs.createWriteStream("test.txt");
//
//         writeStream.write(request.url);
//         writeStream.end();
//
//         response.end();
//     }
//     else
//     {
//         response.write(request.url);
//         response.end();
//     }
//
// });
//
// server.listen(8080);