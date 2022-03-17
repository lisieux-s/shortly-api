import { Router } from "express";
import { createUser, getUser } from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import userSchema from "../schemas/userSchema.js";

const urlsRouter = Router();
urlsRouter.post('/users', validateSchemaMiddleware(userSchema), createUser);
urlsRouter.get('/users', validateTokenMiddleware, getUser);
export default urlsRouter;