import express from 'express'
import { getUserProfile, login, logout, register } from '../controllers/user.controller.js'
import isAuthenticated from '../middlewares/isAuthinticated.js'

const router = express.Router()  // extracting router from express

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile").get(isAuthenticated, getUserProfile)

export default router;