const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs');



exports. signUp = async (req, res) => {
    try{
    const userDate = req.body;
    const password = userDate.password
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
        data:{
        name:userDate.name,
        email:userDate.email,  
        password:hashedPassword,
        gender:userDate.gender,
        phoneNumber:userDate.phoneNumber,          
        type:userDate.type
        }
    })
    return res.status(201).json(newUser)
    }
    catch(err){
        return res.status(500).json({error:err})
    }
}

