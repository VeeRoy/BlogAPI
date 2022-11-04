const express = require('express')
const { Dbconnect } = require('./db')
const bodyParser = require('body-parser')
const passport = require('passport')
const  userRoute  = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

require('dotenv').config()


const PORT = 5667

const app = express()
Dbconnect()
app.use(bodyParser.urlencoded({extended: false}))

require('./authentication/auth')
app.use(express.json())

app.use('/', userRoute)
app.use('/post', postRoute)


app.get('/', (req, res)=>{
    res.send('home page')
})

app.listen(PORT, ()=>{
    console.log('server started')
})