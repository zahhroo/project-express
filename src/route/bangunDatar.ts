import express from "express";
import { kelilingLingkaran, kelilingPersegi, kelilingPersegiPanjang, luasLingkaran, luasPersegi, luasPersegiPanjang, luasSegitiga } from "../controller/bangunDatar";
import { lingkaranbola } from "../middleware/lingkaranbola";
import { kubuspersegi } from "../middleware/kubuspersegi";
import { segitiga } from "../middleware/segitiga";
import { persegiPanjang } from "../middleware/persegipanjang";
const app =  express()

// allow read a body
app.use(express.json())

/**fungsi use() digunakan untuk menerapkan sebuah fungsi pada object express.
 * fungsi tsb akan otomatis dijalankan
 */

app.post(`/lingkaran/luas`, lingkaranbola,luasLingkaran)
app.post(`/lingkaran/keliling`, lingkaranbola, kelilingLingkaran)
app.post(`/persegi/luas`, kubuspersegi, luasPersegi)
app.post(`/persegi/keliling`, kubuspersegi, kelilingPersegi)
app.post(`/persegiPanjang/luas`, persegiPanjang, luasPersegiPanjang)
app.post(`/persegiPanjang/keliling`, persegiPanjang, kelilingPersegiPanjang)
app.post(`/segitiga/luas`, segitiga, luasSegitiga)

export default app 