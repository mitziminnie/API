import mongoose from "mongoose";
import User from "./userModel.js";



// create a plan of your data(Blueprint)
const {Schema}=mongoose

// schema is a blue print

const BlogSchema= new Schema(
    {
        title:{type:String,required:true},
        snippet:{type:String,required:true},
        body:{type:String,required:true},
        // reference a user
        createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
    },
    // timestamp=> tell us when something is created or edited
    {timestamps:true}

)

// create the actual collection/model

const Blog=mongoose.model("blog",BlogSchema)

// export for use in other files

export default Blog;
