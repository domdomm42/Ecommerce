// import express from "express";
// import Cart from "../models/Cart";
// import User from "../models/User";
// import Product from "../models/Product";

// const router = express.Router();

// // Add item to cart
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, productId, quantity } = req.body;

//     // Get or create user
//     const user = new User(userId, "example@email.com", "password");

//     // Get or create cart
//     const cart = new Cart(user);

//     // Get product
//     const product = new Product("Laptop", 999);

//     // Add to cart
//     cart.addToCart(product);
//     cart.printCart(); // Using your existing method

//     res.json({ message: "Product added to cart", cart });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// export default router;
