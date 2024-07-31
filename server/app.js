import express from "express";
import dotenv from "dotenv";
import connection from "./connection";
import router from "./router";
const app = express();
dotenv.config();
const port = process.env.URL || 3000
app.use(express.json())
connection();

app.use("/api",router)

app.listen(port,()=>{
    console.log("server connected",port);
})