const express = require('express')
const app = express()
const port = 3000
const { Client } = require('pg')
const bodyParser = require('body-parser')

// Configurar body-parser para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }))

const client = new Client ({
    user: 'admin',
    host: 'dpg-cgumnpt39el96k2238qg-a.oregon-postgres.render.com',
    database: 'tdswii',
    password: '39Qw2zKn0LKErosFDDQ8BbYvf08yf1tn',
    port: '5432',
    ssl: true
})


app.listen(port, () => {
    console.log(`Example app linstening at http://localhost:${port}`)
})

app.get('/', async (req,res) => {

    res.sendFile(__dirname + "/registro/registro.html")
})

app.post('/registro', async (req, res) => {
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const correo = req.body.email
    const contraseña = req.body.contraseña
  
    try {
      await client.connect()
      const query = 'INSERT INTO usuario (nombre, apellido, correo, password) VALUES ($1, $2, $3, $4)'
      const values = [nombre, apellido, correo, contraseña]
      await client.query(query, values)
      console.log('Datos de usuario guardados en la base de datos.')
      res.send('Registro exitoso.')
    } catch (error) {
      console.error(error)
      res.send('Error al registrar usuario.')
    } finally {
      await client.end()
    }
  })


