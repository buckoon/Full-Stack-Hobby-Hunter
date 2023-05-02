import express from 'express';
const app = express();
import userAuthRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";



app.use(express.json());

app.use("/api/auth", userAuthRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8900, ()=>{
    console.log("API working!")
});
