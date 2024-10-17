import express from "express"
import getHomePage from './../controllers/Home'
import aboutPage from './../controller/About'
const route = express.Router()
const intitWebRoute = (app) => {
    router.get('/', getHomePAge)
    router.get('/about', aboutPage)
    return app.use('/', router)
}
export default intitWebRoute