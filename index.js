const express = require('express')
const app = express()
const { Pool } = require('pg')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()

const PORT = process.env.PORT || 5000

// Configurar body-parser para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }))
/*
const pool = new Pool ({
    user: 'admin',
    host: 'dpg-cgumnpt39el96k2238qg-a.oregon-postgres.render.com',
    database: 'tdswii',
    password: '39Qw2zKn0LKErosFDDQ8BbYvf08yf1tn',
    port: '5432',
    ssl: true
})
*/

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
      await pool.connect()
      const query = 'INSERT INTO usuario (nombre, apellido, correo, password) VALUES ($1, $2, $3, $4)'
      const values = [nombre, apellido, correo, contraseña]
      await pool.query(query, values)
      console.log('Datos de usuario guardados en la base de datos.')
      res.send('Registro exitoso.')
    } catch (error) {
      console.error(error)
      res.send('Error al registrar usuario.')
    } finally {
      await pool.end()
    }
  })

  app.get('/test', async (req, res) => {
    await pool.connect()
    const queryRes = await pool.query("SELECT * FROM usuario")
    console.log(queryRes.rows)
    res.send(queryRes.rows)
  })




