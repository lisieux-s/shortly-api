import { Router } from "express";
import { shortenUrl, getShortUrl, deleteShortUrl } from "../controllers/urlsController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";

const urlsRouter = Router();
urlsRouter.post('/urls/shorten', shortenUrl);
urlsRouter.get('/urls/:shortUrl', getShortUrl)
urlsRouter.delete('/urls/:id')
export default urlsRouter;