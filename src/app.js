import express from "express"


import studentRouter from "./routes/student.routes.js"

const app = express();


app.use(express.json());

app.use("/api", studentRouter );

app.get("/", (req, res )=>{
    res.send("Hello World")
})

export default app;