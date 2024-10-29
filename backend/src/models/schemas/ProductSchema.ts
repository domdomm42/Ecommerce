import mongoose from "mongoose";
import IProduct from "../interfaces/IProduct";

const productSchema = new mongoose.Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
