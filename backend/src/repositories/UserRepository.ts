import BaseRepository from "./BaseRepository";
import { Model } from "mongoose";
import ProductSchema from "../models/schemas/ProductSchema";

class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(userSchema);
  }

  async findByEmail(email: string) {
    return await this.model.findOne({ email });
  }
}
