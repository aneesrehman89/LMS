import express from 'express'
import { login, register } from '../controllers/user.controller.js'

const router = express.Router()  // extracting router from express

router.route("/register").post(register)
router.route("/login").post(login)

export default router;