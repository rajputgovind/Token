import { findAllAdmin, login, saveAdmin } from "../controllers/Admin1Controller.js";
import express from 'express'
import { verifyToken } from "../middelwares/VerifyToken.js";


const adminRouter = express.Router()

adminRouter.post('/admins',saveAdmin)
adminRouter.post('/admins/login',login)
adminRouter.get('/admins',verifyToken,findAllAdmin)
export default adminRouter