npm init -y
npm install express nodemon 
type:module

start nodemon servers .js
dev nodemon servers.js


databases should be in models
blogs
library-mongoose (in mongo)
title 
snippet
body


//  This Controller will have all blog logics
// Import your model

import Blog from "../Models/blogModel.js";

// view all blogs

async function getAllBlogs(req,res) {
    try {
        const blogs = await Blog.find().sort({createdAt:-1})
        // 200 ok
        res.status(200).json(blogs)

    } catch (error) {
        // 500 server error
        res.status(500).json({message:error.message})
    }
}

// get one blog
async function getOneBlog(req,res) {
    try {
        const blog =await Blog.findById(req.Params.id)
        if(!blog){
            // 404=> server not found
            return res.status(404).json({message:"Blog not Found!"})
        }

       // incase the blog is not found return 200 with the blog
       
    //    200-okay
       res.status(200).json(blog)
    } catch (error) {
        // 500=> there is an error
        res.status(500).json({message:error.message})
    }
    
}


// export all function logic
export{getAllBlogs}

// export get one blog
export {getOneBlog}


TO HASH PASSWORD WE USE
NPM INSTALL BCRYPT