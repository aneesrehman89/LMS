import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

// register controller
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exist with this mail.",
      });
    }
    const hasedPassword = await bcrypt.hash(password, 10); // generate random password insted of plain text
    await User.create({
      name,
      email,
      password: hasedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to register",
    });
  }
};

// login business logic/controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // checking for email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    generateToken(res, user, `welcome back ${user.name}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User failed to login",
    });
  }
};

export const logout = async (_, res) => {
  try {
    return res.status(200).cokkie(
      "token",
      "",
      { maxAge: 0 }.json({
        message: "Logged Out Successfully",
        status: true,
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "logout failed",
    });
  }
};

export const getUserProfile = async (req, res)=>{
   try {
           const userId = req.id;
           const user = await User.findById(userId).select('-password')
           if(!user){
            return res.status(404).json({
              message:"Profile not found",
              success:false
            })
           }
           return res.status(200).json({
            success:true,
            user
          })
   } 
   catch (error) {
        console.log(error);
        return res.status(500).json({
          success:false,
          message:"Error while getting profile"
        })
        
   }
}
