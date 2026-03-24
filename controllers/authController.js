import bcrypt from 'bcryptjs';  // Import bcrypt for password comparison
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: "Wrong password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );

    // Return success response with token and user info
    return res.status(200).json({
      success: true,
      token,
      user: { _id: user._id, name: user.name, role: user.role },
    });
  } catch (error) {
    console.error("Error during login:", error);  // Log error
    return res.status(500).json({ success: false, error: "Server error, please try again later." });
  }
};

const verify = (req, res)=>{
  return res.status(200).json({success: true, user:req.user})
}

export { login, verify};