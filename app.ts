import express, { Request, Response } from "express";
const app = express();
const PORT = 3001;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
})

app.get("/about", (req: Request, res: Response) => {
    res.send("This is about page");
})

app.get("/page/:id", (req: Request, res: Response) => {
    res.send(`This is page: ${req.params.id}`);
})

app.get("/html", (req: Request, res: Response) => {
    res.write(`<h1>This is html page</h1>`);
    res.send();
})

app.get("/json", (req: Request, res: Response) => {
    res.status(200).json(
        {
            id: 1,
            name: "Subigya"
        }
    )
})

app.use("/api/contacts", require("./routes/contactRoutes"))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})