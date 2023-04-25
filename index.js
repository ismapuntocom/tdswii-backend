const express = require("express")
const app = express()
const { Pool } = require("pg")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const usersRoutes = require("./routes/users")

dotenv.config()

const PORT = process.env.PORT || 5000

// Configurar body-parser para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/users", usersRoutes)

app.listen(PORT, () => {
    console.log(`Example app linstening at http://localhost:${PORT}`)
})

app.get("/", async (req,res) => {
    res.sendFile(__dirname + "/registro/registro.html")
})
