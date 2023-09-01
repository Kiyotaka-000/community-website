import { UserModel } from "../db/models/user-schema.js";

const Controllers = {
    async EventRegister(req, res){
        const UserData = req.body;
        const doc = await UserModel.create(UserData)
        try{
            if (doc && doc._id){
                res.json({message: "Registration Successfull", "record":doc})
                response.setHeader('Access-Control-Allow-Origin', '*');
            }else{
                res.json({message: "Registration Failed"});
            }
        }catch(e){
            console.log("Registration error: ",e);
            res.json({message: "Registration error"});
        }
    }
}
export default Controllers;