import { timeStamp } from "console";
import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
text:{
    type: String,
    required: true
},
completed:{
    type: Boolean,
    required: true
}



},
{timestamps:true}
)

export const Todo = mongoose.model("todo",todoSchema)