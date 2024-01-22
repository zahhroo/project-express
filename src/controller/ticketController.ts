import { PrismaClient } from "@prisma/client"
import { Request, Response, response } from "express"

/**create an object of Prisma */
const prisma = new PrismaClient()

/**create a function to create new event */
/**asynchronous = fungsi yang berjalan secara paralel */
const createTicket = async (request: Request, response: Response) => {
    try {
        /** read a request from body */
        const eventID = Number(request.body.eventID)
        const userID = Number(request.body.userID)
        const seatID = Number(request.body.seatID)
        const bookedDate = new Date(request.body.bookedDate).toISOString()

        /** insert to events table using prisma */
        const newData = await prisma.tickets.create({
            data: {
                eventID: eventID,
                userID: userID,
                seatID: seatID,
                bookedDate: bookedDate
            }
        })

        return response
        .status(200)
        .json({
            status: true,
            message: `Tickets has been created`,
            data: newData
        })
    } catch (error) {
        return response
            .status(500)
            .json({
                status: false,
                message: error
            })
    }
}

/** create function to READ events */
const readTickets = async (request: Request, response: Response) =>{
    try {
        const dataTicket = await prisma.tickets.findMany()
        return response
        .status(200)
        .json({
            status: true,
            message: `Tickets has been loaded`,
            data: dataTicket
        })
        
    } catch (error) {
        return response
        .status(500)
        .json({
            status: false,
            message: error
        })
    }
}

export { createTicket, readTickets }
