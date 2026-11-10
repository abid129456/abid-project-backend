// import { Router } from "express"

// import prisma from "../lib/prisma.js"

// const router = Router();




// router.get("/students", );



// router.post("/students", )



// router.get("/students/:id", async (req, res) => {
  
//     try{
        
//         const {id} = req.params;

//         const student = await prisma.student.findUnique({
//             where:{
//                 id: id
//             }
//         });

//         if(!student){
//             return res.status(404).json({
//                 status: false,
//                 message: "student not found"
//             });
//         }

//         return res.status(200).json({
//             status: true,
//             message: "student found successfully",
//             data: student
//         })

//     }
//     catch(error){
//         console.log(error);

//         return res.status.apply(500).json({
//             status: false,
//             message:"Internal server error"
//         })
//     }

// })




// export default router;



import {Router} from "express";

import { student,addStudent,studentId,deleteStudent,updateStudentPatch,updateStudentPut } from "../controller/student.controller.js";

const router = Router();


router.get("/students", student);
router.post("/students", addStudent);
router.get("/students/:id", studentId);
router.delete("/students/:id", deleteStudent );
router.patch("/students/:id", updateStudentPatch);
router.put("/students/:id", updateStudentPut);


export default router