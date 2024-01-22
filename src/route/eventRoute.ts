import express from "express"
import { createEvent, readEvents } from "../controller/eventController"
const app = express()

/**allow to read a json from body */
app.use(express.json())

/**adress for get event data */
app.get(`/event`, readEvents)
/** address for add new event */
app.post(`/event`, createEvent)

export default app 