import express from "express";
import {MongoClient} from "mongodb";
import cors from "cors";

const app = express();
const apiRoute = "/api/v1";
const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("products");
const collection = db.collection("productCollection");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get(`${apiRoute}/product/:id`, (request, response) => {
    let product = collection.findOne({
        id: request.params.id
    });

    response.json(product);
});

app.get(`${apiRoute}/product/all`, (request, response) => {
   // let products = collection.find({});


    response.write("Hello NodeJS");

    response.end();

    // response.status(200).json({
    //     message: "Hello Angular++"
    // });
    //
    // response.end();
});
// _id
// quantity
// price
// name

app.post(`${apiRoute}/product/`, async (request, response) => {
    let product = JSON.parse(request.body);

    await collection.insertOne(product);
});

app.listen(8080);