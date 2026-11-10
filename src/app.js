import express from "express"

// import studentRouter from "./src/routes/student.routes.js"

import studentRouter from "./routes/student.routes.js"

const app = express();

// const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", studentRouter );

app.get("/", (req, res )=>{
    res.send("Hello World")
})

export default app;