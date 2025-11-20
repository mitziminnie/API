//  This Controller will have all blog logics
// Import your model

import Blog from "../Models/blogModel.js";

// view all blogs
async function getAllBlogs(req, res) {
    try {
        const blogs = await Blog.find().populate("createdBy","name email").sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get one blog
async function getOneBlog(req, res) {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not Found!" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// create blog
async function createBlog(req, res) {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete blog  ✔ FIXED NAME
async function deleteBlog(req, res) {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not Found!" });
        }
        res.status(200).json({ message: "Blog Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update blog
async function updateBlog(req, res) {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!blog) {
            return res.status(404).json({ message: "Blog not Found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// export all functions
export {
    getAllBlogs,
    getOneBlog,
    createBlog,
    deleteBlog,   // ✔ CORRECTED
    updateBlog
};