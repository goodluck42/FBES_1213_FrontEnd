import express from "express";
import {MongoClient} from "mongodb";

const app = express();
const apiRoute = "/api/v1";
const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("products");
const collection = db.collection("productCollection");


app.get(`${apiRoute}/product/:id`, (request, response) => {
    let product = collection.findOne({
        id: request.params.id
    });

    response.send(JSON.stringify(product));
});

app.use(express.json());
app.post("${apiRoute}/product/", async (request, response) => {
    let product = JSON.parse(request.body);

    await collection.insertOne(product);
});

app.listen(8080);