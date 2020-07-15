import {Schema, model, Document} from "mongoose";

interface PostInterface extends Document{
    title?: string,
    content?: string,
    dueDate?: Date,
}

const PostSchema = new Schema({
    title: String,
    content: String,
    dueDate: Date
},{timestamps: true});

export default model<PostInterface>('Post', PostSchema);
