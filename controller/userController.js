import User from "../model/userModel.js";
import {mailRegister , sendOtp ,chpwd} from "../utils/nodeMailer.js";


export const Login = async (req,res)=>{

  const {email,password} = req.body
  if(email && password){
    console.log(email);
    const userData = await User.findOne({email});
    console.log(userData);
    if(userData){
        if(password ===userData.password ){
            res.json({
                "userData":userData,
                "message":"User Login Successfully"
            })
        }
        else{
            res.status(400).json({message:"Please Check Password"}) 
        }
    }
    else{
      res.status(400).json({message:"No User Found"})
    }
  }else{
    res.status(400).json({message:"Please Enter Requried Fields"})
  }

}


 