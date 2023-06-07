import express, { json, urlencoded } from "express";
import booksRoute from "./routes/books.js";
import mongoose from "mongoose";


const app = express();

app.use(json());
app.use(urlencoded({extended:false}));
app.use("/books",booksRoute);

mongoose.connect("mongodb://localhost:27017",{dbName:"bookMart"})
.then(()=>{
    console.log("MongoDb connected");
}).catch(()=>{
    console.log("Something went Wrong");
});

app.listen(3001,()=>{
    console.log(`Server active at http://localhost:${3001}`);
})