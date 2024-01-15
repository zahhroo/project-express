import express from "express";
import { luasPermukaanBalok, luasPermukaanBola, luasPermukaanKubus, luasPermukaanTabung, volumeBalok, volumeBola, volumeKubus, volumeTabung } from "../controller/bangunRuang";
import { lingkaranbola } from "../middleware/lingkaranbola";
import { kubuspersegi } from "../middleware/kubuspersegi";
import { balok } from "../middleware/balok";
import { tabung } from "../middleware/tabung";
const app =  express()

// allow read a body
app.use(express.json())

/**fungsi use() digunakan untuk menerapkan sebuah fungsi pada object express.
 * fungsi tsb akan otomatis dijalankan
 */

app.post(`/tabung/volume`, tabung, volumeTabung)
app.post(`/tabung/luasPermukaan`, tabung, luasPermukaanTabung)
app.post(`/balok/volume`, balok, volumeBalok)
app.post(`/balok/luasPermukaan`, balok, luasPermukaanBalok)
app.post(`/kubus/volume`, kubuspersegi, volumeKubus)
app.post(`/kubus/luasPermukaan`, kubuspersegi, luasPermukaanKubus)
app.post(`/bola/volume`, lingkaranbola, volumeBola)
app.post(`/bola/luasPermukaan`, lingkaranbola, luasPermukaanBola)

export default app 