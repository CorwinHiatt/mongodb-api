import { dbConnect } from "./dbConnect";

export async function addNewFurniture(req, res) {
    const newFurniture = req.body
    const db = dbConnect()
    await db.colllection("furnniture").insertOne(newFurniture)
}