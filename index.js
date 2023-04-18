const express = require('express')
const app = express()
const port = 3000
const { Client } = require('pg')

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

    await client.connect((err) => {
        if (err) {
            console.error("AAAAAAAAAAAAA", err.stack)
        } else {
            console.log("pog")
        }
    })

    const queryRes = await client.query("SELECT * FROM usuario")
    console.log(queryRes.rows)
})

