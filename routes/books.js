import { Router } from "express";
import {getBooks,createBook,deleteBook, updateBook} from "../controller/books.js";

const router = Router();

router.get("/",getBooks);

router.post("/add",createBook);

router.put("/update/:id",updateBook);

router.delete("/delete/:id",deleteBook);
export default router;