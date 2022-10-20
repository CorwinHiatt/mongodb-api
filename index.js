import express from 'express'

import { addNewFurniture, fundFurnitureByModel, getAllFurniture, } from "./src/furniture.js"

const PORT = 3036
const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('working'))
app.post('/furniture', addNewFurniture)
app.get('/furniture' , getAllFurniture)
app.get('/furniture/:search', fundFurnitureByModel)

app.listen(PORT, () => console.log(`Listening on https://localhost:${PORT}....`))