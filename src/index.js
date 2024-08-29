const express = require("express");
const morgan = require("morgan");
const database = require("./db.js")

// MAIN SETTINGS
const app = express()
app.set("port", 3000);
app.listen(app.get("port"))

console.log("listen on port: ", app.get("port"));


// MIDDLEWARES
app.use(morgan("dev"));


// ROUTES
app.get("/productos", async (req, res)=>{
    const conn = await database.getConn();
    const result = await conn.query("SELECT * FROM producto")
    console.log("result: ", result);
    return result
})