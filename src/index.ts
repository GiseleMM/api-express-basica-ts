import { error } from "console";
import express ,{ Request,Response,Application } from "express";
import cors from "cors";

const app:Application=express();
app.use(cors());// all URLS


//Typar rutas y respuesta
//   {} request.params 
// string es el tipo de respuesta , si retorno array de tareas Task[] en res.json([{},{}])
app.get<{},string>("/api",(req:Request,res:Response)=>{
    res.send("Hola mundo");
})
//
app.get("/rgeneric",(req:Request,res:Response<string[]>)=>{
    res.json(["hola","mundo"]);
});
app.listen(8888,()=>{console.log("Server run port 8888")}).on("error",(error)=>console.log(error.message))