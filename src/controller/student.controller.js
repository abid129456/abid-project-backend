import prisma from "../lib/prisma.js"


export const student = async (req, res) => {
    try {
        const students = await prisma.student.findMany();

        return res.status(200).json({
            status: true,
            count: students.length,
            data: students
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};



export const addStudent = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        if (!email) {
            return res.status(400).json({
                status: false,
                message: "Eamil must be required"
            })
        }

        const existingStudent = await prisma.student.findUnique({
            where: {
                email
            }
        })

        if (existingStudent) {
            return res.status(200).json({
                status: false,
                message: "This email allready exist"
            })
        }


        const student = await prisma.student.create({
            data: {
                name,
                email,
                phone
            }
        })
        return res.status(201).json({
            status: true,
            message: "Student created successfully",
            data: student

        })


    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Internal server error"
        })
    }
};




export const studentId = async (req, res) => {

    try {

        const { id } = req.params;

        const student = await prisma.student.findUnique({
            where: {
                id: id
            }
        });

        if (!student) {
            return res.status(404).json({
                status: false,
                message: "student not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "student found successfully",
            data: student
        })

    }
    catch (error) {
        console.log(error);

        return res.status.apply(500).json({
            status: false,
            message: "Internal server error"
        })
    }

}


export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const ExistStudent = await prisma.student.findUnique({
            where: {
                id: id
            }
        });

        if (!ExistStudent) {
            return res.status(404).json({
                status: false,
                message: "Student not found"
            });
        }

        const result = await prisma.student.delete({
            where: {
                id: id
            }
        })
        return res.status(200).json({
            status: true,
            message: "Student deleted successfully",
            data: result
        })

    }
    catch (error) {
        console.log(error);

        return res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }
}




export const updateStudentPatch = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedStudent = await prisma.student.update({
            where: {
                id: id
            },
            data: updateData
        });

        return res.status(200).json({
            status: true,
            message: "Student patched successfully",
            data: updatedStudent
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        });
    }
};




export const updateStudentPut = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;

        const updatedStudent = await prisma.student.update({
            where: {
                id: id
            },
            data: {
                name,
                email,
                phone
            }
        });

        return res.status(200).json({
            status: true,
            message: "Student updated successfully",
            data: updatedStudent
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        });
    }
};