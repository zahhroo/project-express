import express from "express"
import { createUser, readUsers } from "../controller/userController"
const app = express()

/**allow to read a json from body */
app.use(express.json())

/**adress for get event data */
app.get(`/user`, readUsers)
/** address for add new event */
app.post(`/user`, createUser)

export default app 