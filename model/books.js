import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required: true
    },
    publisher:{
        type: String
    },
    ISBN:{
        type:String
    }
});

const Book = new mongoose.model("Book",BooksSchema);

export default Book;