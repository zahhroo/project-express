import { PrismaClient } from "@prisma/client"
import { Request, Response, response } from "express"

/**create an object of Prisma */
const prisma = new PrismaClient()

/**create a function to create new event */
/**asynchronous = fungsi yang berjalan secara paralel */
const createSeat = async (request: Request, response: Response) => {
    try {
        /** read a request from body */
        const eventID = Number(request.body.eventID)
        const rowNum = request.body.rowNum
        const seatNum = request.body.seatNum
        const status = (request.body.status)

        /** insert to events table using prisma */
        const newData = await prisma.seats.create({
            data: {
                eventID: eventID,
                rowNum: rowNum,
                seatNum: seatNum,
                status: status
            }
        })

        return response
        .status(200)
        .json({
            status: true,
            message: `Seats has been created`,
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
const readSeats = async (request: Request, response: Response) =>{
    try {
        const dataSeat = await prisma.seats.findMany()
        return response
        .status(200)
        .json({
            status: true,
            message: `Seats has been loaded`,
            data: dataSeat
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

export { createSeat, readSeats }
