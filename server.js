// import express from "express"

// import studentRouter from "./src/routes/student.routes.js"

// const app = express();

// const port = process.env.PORT || 5000;

// app.use(express.json());

// app.use("/api", studentRouter );

// app.get("/", (req, res )=>{
//     res.send("Hello World")
// })

// app.listen(port, ()=>{
//     console.log(`Server is running prot ${port}`)
// })




import prisma from "./src/lib/prisma.js";

import app from "./src/app.js";


const PORT =process.env.PORT || 5000;

const startServer = async() => {
    try{

        await prisma.$connect();
        console.log("Prisma connect successfully");

        app.listen(PORT, ()=>{
            console.log(`Server is running prot ${PORT}`)
        })

    }
    catch(error){
        console.log(error);

        res.status(500).json({
            data: `Check error ${error}`
        })

        await prisma.$disconnect();
        process.exit(1)
    }
}



export default startServer();