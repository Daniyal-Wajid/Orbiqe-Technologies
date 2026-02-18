const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const User = require("../models/User");
const Project = require("../models/Project");
const bcrypt = require("bcryptjs");

dotenv.config({ path: path.join(__dirname, "../.env") });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected for Reset...");
    } catch (err) {
        console.error("DB Connection Error:", err.message);
        process.exit(1);
    }
};

const resetDb = async () => {
    await connectDB();

    try {
        // Delete all data
        await Project.deleteMany({});
        console.log("Projects deleted.");
        await User.deleteMany({});
        console.log("Users deleted.");

        // Re-seed Admin
        const adminEmail = "wajid@gmail.com";
        const hashedPassword = await bcrypt.hash("wajid9400", 10);
        await User.create({
            name: "Wajid Hussain",
            email: adminEmail,
            password: hashedPassword,
            role: "admin"
        });
        console.log("Admin account (wajid@gmail.com) re-seeded successfully.");

        console.log("Database reset complete.");
        process.exit(0);
    } catch (error) {
        console.error("Error resetting database:", error);
        process.exit(1);
    }
};

resetDb();
