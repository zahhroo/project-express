import express from "express";
import { luasPermukaanBalok, luasPermukaanBola, luasPermukaanKubus, luasPermukaanTabung, volumeBalok, volumeBola, volumeKubus, volumeTabung } from "../controller/bangunRuang";
const app =  express()

// allow read a body
app.use(express.json())

/**fungsi use() digunakan untuk menerapkan sebuah fungsi pada object express.
 * fungsi tsb akan otomatis dijalankan
 */

app.post(`/tabung/volume`, volumeTabung)
app.post(`/tabung/luasPermukaan`, luasPermukaanTabung)
app.post(`/balok/volume`, volumeBalok)
app.post(`/balok/luasPermukaan`, luasPermukaanBalok)
app.post(`/kubus/volume`, volumeKubus)
app.post(`/kubus/luasPermukaan`, luasPermukaanKubus)
app.post(`/bola/volume`, volumeBola)
app.post(`/bola/luasPermukaan`, luasPermukaanBola)

export default app 