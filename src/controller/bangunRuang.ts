import { Request, Response } from "express"

const volumeTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const volume =  phi * r * t
        return response.status(200)
        .json({
            status: true,
            r,
            t,
            volume
            // bisa di ketik 1 sja (r atau luas sja), tidak hrs d tulis 2 jika sama
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const luasPermukaanTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const luasPermukaan =  2 * phi * r * (r+t)
        return response.status(200)
        .json({
            status: true,
            r,
            t,
            luasPermukaan
            // bisa di ketik 1 sja (r atau luas sja), tidak hrs d tulis 2 jika sama
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const volumeKubus = (request: Request, response: Response) => {
    try {
        const s: number = Number(request.body.s)
        const volume =  s * s * s
        return response.status(200)
        .json({
            status: true,
            s,
            volume
            // bisa di ketik 1 sja (r atau luas sja), tidak hrs d tulis 2 jika sama
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const luasPermukaanKubus = (request: Request, response: Response) => {
    try {
        const s: number = Number(request.body.s)
        const luasPermukaan =  6 * s * s
        return response.status(200)
        .json({
            status: true,
            s,
            luasPermukaan
            // bisa di ketik 1 sja (r atau luas sja), tidak hrs d tulis 2 jika sama
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const volumeBalok = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const volume =  p * l * t
        return response.status(200)
        .json({
            status: true,
            p,
            l,
            t,
            volume
            // bisa di ketik 1 sja (r atau luas sja), tidak hrs d tulis 2 jika sama
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const luasPermukaanBalok = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const luasPermukaan =  2 * ((p*l) + (p*t) + (l*t))
        return response.status(200)
        .json({
            status: true,
            p,
            l,
            t,
            luasPermukaan
            // bisa di ketik 1 sja (r atau luas sja), tidak hrs d tulis 2 jika sama
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const volumeBola = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const volume =  4/3 * phi * r * r * r
        return response.status(200)
        .json({
            status: true,
            r,
            volume
            // bisa di ketik 1 sja (r atau luas sja), tidak hrs d tulis 2 jika sama
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const luasPermukaanBola = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const luasPermukaan =  4 * phi * r * r
        return response.status(200)
        .json({
            status: true,
            r,
            luasPermukaan
            // bisa di ketik 1 sja (r atau luas sja), tidak hrs d tulis 2 jika sama
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

export {volumeTabung, luasPermukaanTabung, volumeKubus, luasPermukaanKubus, volumeBalok, luasPermukaanBalok, volumeBola, luasPermukaanBola}