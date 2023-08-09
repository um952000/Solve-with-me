import mongoose from 'mongoose';

//creating a mongoose Schema for our posts
const postSchema = mongoose.Schema({
    
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,

    },
    createdAt: {

        type: Date,
        default: new Date(),

    },
})

//creating a combine model of the above mongoose schema......
var PostMessage = mongoose.model('PostMessage', postSchema);

//exporting this mongoose model
export default PostMessage;