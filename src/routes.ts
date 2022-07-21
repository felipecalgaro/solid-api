import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

export const router = Router()

router.post('/users', (req, res) => {
    return createUserController.handle(req, res)
})