// UserRegister.js
import dotenv from 'dotenv';
dotenv.config(); // Loads environment variables from .env file

import User from './models/User.js'; // Ensure this points to your User model
import bcrypt from 'bcrypt';
import connectToDatabase from './db/db.js';

const userRegister = async () => {
    try {
        // Ensure the database is connected before proceeding
        await connectToDatabase(); 

        // Hash password
        const hashPassword = await bcrypt.hash("admin", 10);

        // Create new user
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        });

        // Save new user to database 
        await newUser.save();
        console.log('User created successfully');
    } catch (error) {
        console.log('Error during user registration:', error);
    }
};

userRegister();