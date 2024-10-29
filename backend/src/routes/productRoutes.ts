import { Router, Request, Response } from "express";
import ProductRepository from "../repositories/ProductRepository";

const router = Router();
const productRepo = new ProductRepository();

router.post("/", async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const newProduct = await productRepo.create(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const product = await productRepo.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await productRepo.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
