const express = require('express')
const app = express()
const port = 3000
const {Pool} = require('pg')
const  pool = new Pool ({
    user: 'admin',
    host: 'dpg-cgumnpt39el96k2238qg-a.oregon-postgres.render.com',
    database: 'tdswwii',
    password: '39Qw2zKn0LKErosFDDQ8BbYvf08yf1tn',
    port: '5432' 
})


app.listen(port, () => {
    console.log(`Example app linstening at http://localhost:${port}`)
})

app.get('/', (req,res) => {

    pool.query('SELECT * FROM usuario', (err,result) => {

        if(err){

            throw err
        }
        res.send(result.rows)
    })
})

