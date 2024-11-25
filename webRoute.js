import express from "express"
import HomeController  from "./Controller/HomeController"
import { ContactController } from "./Controller/ContactController"
import { AboutController } from "./Controller/AboutController"
import  UserController  from "./Controller/UserController"
import GiohangController from "./Controller/GiohangController"

const router = express.Router()
const intitWebRoute = (app) => {
    // router.get('/about', aboutPage)
    // router.get('/', HomeController.index)
    // router.get('/contact', ContactController.index)
    // router.get('/about',AboutController.index )
    router.get('/', UserController.getALLUser)
    router.get('/create',UserController.create)
    router.post('/giohang', GiohangController.showCart )
    router.post('/giohang/add', GiohangController.addItem )
    router.post('/giohang/clear', GiohangController.clearCart )
    router.post('/giohang/remove', GiohangController.removeItem )
    router.post('/giohang/update', GiohangController.updateQuantity )
    
    // router.get('/hello',  )
    return app.use(router)
}
export default intitWebRoute