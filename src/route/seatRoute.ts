import express from "express"
import { createSeat, readSeats } from "../controller/seatController"
const app = express()

/**allow to read a json from body */
app.use(express.json())

/**adress for get event data */
app.get(`/seat`, readSeats)
/** address for add new event */
app.post(`/seat`, createSeat)

export default app 