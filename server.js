import * as dotenv from "dotenv";
import "express-async-errors";
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
import { v2 as cloudinary } from 'cloudinary';
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import fileUpload from 'express-fileupload';
import cors from 'cors'
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
dotenv.config();
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(cors())
app.use(express.static(path.resolve(__dirname, "./public")));
// USE V2

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(cookieParser(process.env.JWT_SECRET));
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
// app.get('/api/v1/test', (req, res) => {
//     res.json({ msg: 'test route' });
//   });




app.use("/api/v1/auth", authRouter);
app.use("/api/v1/courses", courseRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
