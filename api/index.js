import express from "express";
import homeRoutes from "./routes/home.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", homeRoutes);

app.listen(8800);