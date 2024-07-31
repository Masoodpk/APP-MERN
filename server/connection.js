import mongoose from "mongoose"

function connection(){
    return mongoose.connect("mongodb+srv://masoodpk555:jZmMZ3etWB0BaHnz@cluster0.x79ftrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}

export default connection;


jZmMZ3etWB0BaHnz