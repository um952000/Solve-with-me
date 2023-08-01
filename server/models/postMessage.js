import mongoose from 'mongoose';

// Designing a schema of particular post ..............
const postSchema = mongoose.Schema({

     title: String,
     message: String,
     creator: String,
     tags: [String],
     selectedFile: String,
     likeCount:{

        type: Number,
        default: 0
     },
     createdAt:{
        type: Date,
        default: new Date()
     },

});

//turning the above schema into a model called postMessage
const postMessage = mongoose.model('PostMessage', postSchema);

//exporting the postMessage model
export default postMessage;