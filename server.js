import express from 'express'
import dotenv from 'dotenv/config'
import myDateTime from "./date.js"
import {getParamsURL, getPath} from "./getURL"
import viewEngine from './viewEngine.js'

const app = express()
viewEngine(app)
const port  = process.env.PORT
// app.get('/about', (req, res) => {
//     res.send('Hello World!. Page about' )
// })

app.get('/date', (req, res) =>{
    res.send(myDateTime()) 
})

app.get('/getURL', (req, res) => {
    res.send(getParamsURL(req))
})

app.get('/ejs', (req, res) => {
    res.render("test")
})

app.get('/home', (req, res) => {
    res.render("home")
})

app.get('/about', (req, res) => {
    res.render("about")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})