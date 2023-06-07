import Book from "../model/books.js";

const getBooks = async(req,res)=>{
    const books = await Book.find();
    res.status(200).json(books);
}

const createBook = async (req,res)=>{
    const {title,author,publisher,isbn} = req.body;
    const books = await Book({
        title,
        author,
        publisher,
        isbn
    });
    await books.save();
    res.status(200).json({msg:books});
}

const updateBook = async (req,res)=>{
    const id = req.params.id;
    const {title,author,publisher,isbn} = req.body;
    await Book.findByIdAndUpdate(id,{title,author,publisher,isbn});
    res.status(200).json({msg:"Book Updated Successfully"});


}

const deleteBook = async (req,res)=>{
    const id = req.params.id;
    await Book.findByIdAndRemove(id,(err,result)=>{
        if(err){
            res.status(401).json({msg:"Something went wrong"})
        }
        else{
            res.status(200).json({msg:"Book Deleted Successfully"})
        }
    });
    

}

export  {getBooks,createBook,updateBook,deleteBook};