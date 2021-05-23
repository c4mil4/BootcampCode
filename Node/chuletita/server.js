//Importamos nuestro archivo config con las variables de entorno
require("./config/config");

const mongoose = require("mongoose") //la clase se ve de color verde
const express = require("express");
const app = express();

const users = require("./routes/users")

//Antes de los endpoint, usamos los niddlewares
app.use(express.json());

app.use("/users", users);

mongoose.connect('mongodb://localhost:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connections;

db.on("error", err => console.log("Connection to DB failed: ", err));
db.once("open", () => console.log("Connection to DB successfuly"));

app.listen(
    process.env.PORT,
    () => console.log("Listening on port", process.enves.PORT)
)

app.get("/", (req, res) => {
    res.json({message: "Petición GET correctamente"});
});
