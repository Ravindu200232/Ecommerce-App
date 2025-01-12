import userModel from "../models/userModel.js"

async function userDetailsController(req,res) {

    try{
        console.log("user id",req.userId)
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "login user details"
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            eror : true,
            success : false
        })
    }
    
}

export default userDetailsController