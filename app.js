import express from "express";
import "express-async-errors";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("*", () => {
  throw new Error("Route not found...");
});

export default app;
