/**ini adalah file  utama
 * dimana ada proses menjalankan server backend
 */ 

// memanggil library express
import express, { Request, Response } from "express"
import { validateCube } from "./middleware/validateCube"
import routeBangunDatar from "./route/bangunDatar"
import routeBangunRuang from "./route/bangunRuang"

// buat wadah untuk inisiasi express
 const app = express()

 app.use(express.json())

//  mnedefinisikan PORT berjalannya server
const PORT = 8000   

// proses 1 untuk handle request
app.get(`/serena`, (request: Request, response: Response) => {
    /**
     * ini adalah proses handle request dengan
     * url/addres: http://localhost:8000/serena
     * method: GET
     */

    // memberi respon
    return response.status(200).json({
        massage: `Hello Serena anaknya Bu Siana`
    })
})

/**read a query */
app.get(`/moklet`,(request: Request, response: Response) => {
    /**asumsikan data yg dikirim adalah 
     * nama dan umur
     */
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()
    let message : string = `My name is ${nama} and i'm ${umur} years old`
    return response.status(200).json(message)
})

/** read data request from parameter */
app.get(`/telkom/:nama/:gender`,(request: Request, response: Response) => {
    let nama : string = request.params.nama
    let gender : string = request.params.gender
    let message: string = `My name is ${nama} and i'm ${gender}`
    return response.status(200).json(message)
})

/**read a reuqest from body */
app.post(`/moklet`,(request: Request, response: Response) => {
    /**asumsikan data yg dikirim adalah
     * panjang dan lebar
     */
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar

    let luasPersegiPanjang: number = panjang * lebar
    let message = `Luas persegi panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(message)
})

/**buatlah sebuah request untuk mengonversi 
 * suhu celcius ke fahrenheit, kelvin, dan reamur
 * menggunakan request params
 * exp: http://localhost:8000/celcius/80
 * (80 adalah nilai celciusnya)
 * response data ->
 * {
 * reamur: ?, fahrenheit: ?, kelvin: ?
 * }
 */
app.get(`/suhu/:celcius`,(request: Request, response: Response) => {
    let celcius : any = request.params.celcius

    let reamur : any = celcius * 4/5
    let fahrenheit : any = (celcius * 9/5) + 32
    let kelvin : any = celcius + 273.15
    let message: string = `Hasil konversi dari ${celcius} celcius adalah ${reamur} reamur, ${fahrenheit} fahrenheit, ${kelvin} kelvin`
    return response.status(200).json(message)
})

/** create request for count volume of long cube */
app.post(`/balok`, validateCube, (request: Request, response: Response) => {
    // read panjang lebar tinggi
    let panjang: number = Number(request.body.panjang)
    let lebar: number = Number(request.body.lebar)
    let tinggi: number = Number(request.body.tinggi)

    let volume: number = panjang * lebar * tinggi
    return response.status(200).json({
        panjang, lebar, tinggi, volume 
    })
})

// register route of bangun datar
app.use(routeBangunDatar, routeBangunRuang)
// app.use(routeBangunRuang)

// run server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
})

// middleware : proses yg d lalui/d jlnkn sblm data request d olah