import express from 'express';
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

import postRoutes from "./routes/posts.js";
/*import cors from "cors";
import cookieParser from "cookie-parser";*/



app.use(express.json());
/*app.use(cors())
app.use(cookieParser)*/

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, ()=>{
    console.log("API working!")
});
