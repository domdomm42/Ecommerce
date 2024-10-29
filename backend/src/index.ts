import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import productRoutes from "./routes/productRoutes";
// import Product from "./models/Product";
// import User from "./models/User";
// import Cart from "./models/Cart";
// import signupRoute from "./routes/signupRoute";

// import issuesRoute from "./routes/issuesRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/product", productRoutes);
mongoose
  .connect(process.env.MONGODB_URI ?? "")
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
