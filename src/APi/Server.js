import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const dbPath = "database.json";

const readDB = () => {
    try {
        if (!fs.existsSync(dbPath)) return []; 
        return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    } catch (error) {
        console.error("❌ Error reading database:", error);
        return [];
    }
};

const writeDB = (data) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("❌ Error writing to database:", error);
    }
};

app.post("/api/SingUP", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const users = readDB();
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
        return res.status(409).json({ success: false, message: "Email is already registered." });
    }

    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);
    writeDB(users);

    return res.status(201).json({ success: true, message: "User registered successfully." });
});
app.get("/api/users", (req, res) => {
    const users = readDB();
    res.json(users);
});

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    const users = readDB();
    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ success: false, message: "Invalid email or password." });
    }

    return res.status(200).json({
        success: true,
        message: "Login successful.",
        user: { id: user.id, name: user.name, email: user.email }, // ارسال اطلاعات مهم بدون رمز عبور
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
