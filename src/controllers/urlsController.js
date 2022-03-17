import { connection } from "../database.js";

export async function shortenUrl(req, res) {
    const { url } = req.body;
    const shortUrl = Date.now().toString(16);
    try {
        res.status(201).send(shortUrl);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function getShortUrl(req, res) {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function deleteShortUrl(req, res) {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}