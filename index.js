const express = require('express')
const { Dbconnect } = require('./db')
const bodyParser = require('body-parser')
const passport = require('passport')
const  userRoute  = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

require('dotenv').config()


const PORT = process.env.PORT || 5000

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

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})

app.listen(PORT, ()=>{
    console.log('server started')
})