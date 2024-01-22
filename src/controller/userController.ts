import { PrismaClient } from "@prisma/client"
import { Request, Response, response} from "express"

/**create an object of Prisma */
const prisma = new PrismaClient()

/**create a function to create new event */
/**asynchronous = fungsi yang berjalan secara paralel */
const createUser = async (request: Request, response: Response) => {
    try {
        /** read a request from body */
        const firstname = request.body.firstname
        const lastname = request.body.lastname
        const email = request.body.email
        const password = request.body.password
        const role = request.body.role

        /** insert to events table using prisma */
        const newData = await prisma.users.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                role: role
            }
        })

        return response
        .status(200)
        .json({
            status: true,
            message: `Users has been created`,
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
const readUsers = async (request: Request, response: Response) =>{
    try {
        const dataUser = await prisma.users.findMany()
        return response
        .status(200)
        .json({
            status: true,
            message: `Users has been loaded`,
            data: dataUser
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

export { createUser, readUsers }