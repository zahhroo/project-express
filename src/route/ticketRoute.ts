import express from "express"
import { createTicket, readTickets } from "../controller/ticketController"
const app = express()

/**allow to read a json from body */
app.use(express.json())

/**adress for get event data */
app.get(`/ticket`, readTickets)
/** address for add new event */
app.post(`/ticket`, createTicket)

export default app 