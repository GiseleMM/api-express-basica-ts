"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // all URLS
//Typar rutas y respuesta
//   {} request.params 
// string es el tipo de respuesta , si retorno array de tareas Task[] en res.json([{},{}])
app.get("/api", (req, res) => {
    res.send("Hola mundo");
});
//
app.get("/rgeneric", (req, res) => {
    res.json(["hola", "mundo"]);
});
app.listen(8888, () => { console.log("Server run port 8888"); }).on("error", (error) => console.log(error.message));
