import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User is unauthroized",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.JWT_Secret_Key);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid Token",
        success: false,
      });
    }
    // varable to store user id
    req.id = decode.userId
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAuthenticated
