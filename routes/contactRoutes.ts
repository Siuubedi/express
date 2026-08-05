import express, { Request, Response } from "express";
const router = express.Router()

router.get("/", (req: Request, res: Response) => {
    res.send("This is contact page");
})

router.get("/json", (req: Request, res: Response) => {
    res.status(200).json({ message: "hello" });
})

module.exports = router;