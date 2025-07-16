import express from "express";
import cors from "cors";
import convertRoutes from "./routes/convert";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/convert", convertRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
