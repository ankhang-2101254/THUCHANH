import express from "express"
import { HomeController } from "./Controller/HomeController"
import { ContactController } from "./Controller/ContactController"
import { AboutController } from "./Controller/AboutController"
import  UserController  from "./Controller/UserController"

const router = express.Router()
const intitWebRoute = (app) => {
    // router.get('/about', aboutPage)
    router.get('/', HomeController.index)
    router.get('/contact', ContactController.index)
    router.get('/about',AboutController.index )
    router.get('/list', UserController.getALLUser   )
    return app.use('/', router)
}
export default intitWebRoute