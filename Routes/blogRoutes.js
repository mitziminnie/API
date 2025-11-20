import express from "express"
import { getAllBlogs, getOneBlog, createBlog, deleteBlog, updateBlog } from "../controllers/blogController.js"


// we use express router to set up routing un node

const blogrouter = express.Router();

blogrouter.get("/",getAllBlogs)
blogrouter.get("/:id",getOneBlog)
blogrouter.post("/", createBlog)
blogrouter.delete("/:id",deleteBlog)
blogrouter.put("/:id",updateBlog)

export default blogrouter;