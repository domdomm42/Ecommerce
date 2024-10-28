// import { Error } from "mongoose";

// const express = require("express");
// const router = express.Router();
// const User = require("../../models/User");

// // Get all users
// router.get("/", async (req: Request, res: Response) => {
//   try {
//     const users = await User.find().select("-password");
//     res.json(users);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: error.message });
//     } else {
//       res.status(500).json({ message: "An unknown error occurred" });
//     }
//   }
// });

// // Create user
// router.post("/", async (req: Request, res: Response) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json(user);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       res.status(400).json({ message: error.message });
//     } else {
//       res.status(400).json({ message: "An unknown error occurred" });
//     }
//   }
// });

// // Get single user
// router.get("/:id", async (req: Request, res: Response) => {
//   try {
//     const user = await User.findById(req.params.id).select("-password");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json(user);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: error.message });
//     } else {
//       res.status(500).json({ message: "An unknown error occurred" });
//     }
//   }
// });

// // Update user
// router.put("/:id", async (req: Request, res: Response) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(user);
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(400).json({ message: error.message });
//     } else {
//       res.status(400).json({ message: "An unknown error occurred" });
//     }
//   }
// });

// // Delete user
// router.delete("/:id", async (req: Request, res: Response) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.json({ message: "User deleted" });
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: error.message });
//     } else {
//       res.status(500).json({ message: "An unknown error occurred" });
//     }
//   }
// });

// module.exports = router;
