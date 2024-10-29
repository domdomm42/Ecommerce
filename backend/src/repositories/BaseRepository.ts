import { Model } from "mongoose";

abstract class BaseRepository<T extends IObject> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  // get all object from database
  async getAll(): Promise<T[]> {
    return await this.model.find();
  }

  // get single object from database
  async get(id: string): Promise<T | null> {
    return await this.model.findById(id);
  }

  // create object in database
  async create(data: T): Promise<T> {
    return await this.model.create(data);
  }

  // update object
  async update(id: string, data: Partial<T>): Promise<T | null> {
    return await this.model.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async delete(id: string): Promise<T | null> {
    return await this.model.findByIdAndDelete(id);
  }
}

export default BaseRepository;
