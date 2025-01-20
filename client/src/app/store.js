import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./Rootreducer"
import { authApi } from "../features/apis/auth.api.js"

export const appStore = configureStore({
    reducer: rootReducer,
    middleware:(defautlMiddleware) => defautlMiddleware().concat(authApi.middleware)
})