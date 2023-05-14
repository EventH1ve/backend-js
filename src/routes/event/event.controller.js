const { PrismaClient } = require('@prisma/client')


exports. getAllEvents = async (req, res) => {
    try{
        const prisma = new PrismaClient()
        const AllEvents = await prisma.event.findMany()
        return res.status(200).json(AllEvents) 

    }
    catch(err){
        console.log(`Error while receiving all events ERROR:${err.message}`)
        return res.status(500).json([])

    }
    
}

// exports.getAllPackages = async (req, res) => {
//     try{
//         const prisma = new PrismaClient()
//         const AllPackages = await prisma.package.findMany()
//         //Returning fetched packages which is either an empty list or a existing list of packages
//         return res.status(200).json(AllPackages)
//     }catch(err){
//         console.log(`Error while retreiving all packages\n Error: ${err.message}`)
//         //Returning empty list of packages to frontend request
//         res.status(500).json([])
//     }    
// }