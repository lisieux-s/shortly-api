import { connection } from "../database.js";

export async function shortenUrl(req, res) {
    const { url } = req.body;
    const { authorization } = req.headers
    try {

    } catch (error) {
        console.log(error)
    }
}