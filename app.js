import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandling } from "./middlewares/error-hanlder.js";

dotenv.config();
const PORT = process.env.NODE_PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("*", () => {
  throw new Error("Route not found...");
});

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Server listenig on port::${PORT}`);
});

export default app;
