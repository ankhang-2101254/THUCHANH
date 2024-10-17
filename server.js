import express from 'express'
import dotenv from 'dotenv/config'
import myDateTime from "./date.js"
import {getParamsURL, getPath} from "./getURL"
import viewEngine from './viewEngine.js'
import initWebroute from './route/webRoute'

const app = express()
viewEngine(app)
const port  = process.env.PORT
initWebroute(app)

// app.get('/about', (req, res) => {
//     res.send('Hello World!. Page about' )
// })
app.use(express.static('public')); 

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

app.get('/header', (req, res) => {
    res.render("header")
})

app.get('/footer', (req, res) => {
    res.render("footer")
})

app.get('/main', (req, res) => {
    res.render("main")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
