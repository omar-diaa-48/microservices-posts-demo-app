import mongoose from "mongoose"

interface PostAttributes{
    title:string;
    content:string;
    owner:string;
}

interface PostDocument extends mongoose.Document {
    title:string;
    content:string;
    owner:string;
}

interface PostModel extends mongoose.Model<PostDocument>{
    build(attributes:PostAttributes):PostDocument;
}

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    }
})

const Post = mongoose.model<PostDocument, PostModel>("Post", postSchema);

postSchema.statics.build = (attributes:PostAttributes) => {
    return new Post(attributes);
}

export { Post };