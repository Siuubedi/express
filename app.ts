import express, { Request, Response } from "express";
const app = express();
const PORT = 3001;


app.get("/json", (req: Request, res: Response) => {
    res.status(200).json(
        {
            id: 1,
            name: "Subigya"
        }
    )
})

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})