import { Model } from "mongoose";
import IProduct from "../models/interfaces/IProduct";
import ProductSchema from "../models/schemas/ProductSchema";

class ProductRepository {
  private model: Model<IProduct>;

  constructor() {
    this.model = ProductSchema;
  }

  async findAll(): Promise<IProduct[]> {
    return this.model.find();
  }

  async findById(id: string): Promise<IProduct | null> {
    return this.model.findById(id);
  }

  async create(data: IProduct): Promise<IProduct> {
    return this.model.create(data);
  }
}

export default ProductRepository;
