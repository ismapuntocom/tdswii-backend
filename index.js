const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const usersRoutes = require("./routes/users")

dotenv.config()

const PORT = process.env.PORT || 5000

// Configurar body-parser para analizar los datos del formulario

app.use(bodyParser.urlencoded({ extended: true }))
app.use("/users", usersRoutes)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

app.get("/", async (req,res) => {
    res.sendFile(__dirname + "/registro/registro.html")
})