import mongoose from "mongoose";

//here we are going to create a schema for our application

const postSchema = mongoose.Schema({

    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount :{

        type: Number,
        default: 0
    },

    createdAt: {

        type: Date,
        default: new Date()
    }

})

// creating class of model i.e PostMessage

//  PostMessage is the name of the collection
// & postschema is schema name


//collection creation
 const PostMessage = mongoose.model('PostMessage', postSchema);

//exporting a mongoose model from this file........
export default PostMessage;