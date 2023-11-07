import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import router from './routes/routes.js';
const app = express();

dotenv.config()
app.use(express.json())
app.use("/api/farmers", router)

app.get("/ddd", (req, res) => {
    res.send("Hola mundo")
});

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const start = async () => {
    try {
        await connectDB(MONGO_URI);
        console.log('!Mongodb connected¡');
        app.listen(PORT, () => {
            console.log(`Server running http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();

