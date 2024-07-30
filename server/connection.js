import mongoose from "mongoose"

function connection(){
    return mongoose.connect(process.env.DB_URI)
}

export default connection;