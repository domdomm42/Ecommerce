interface IProduct extends IObject {
  name: string;
  description: string;
  price: number;
}

interface IDigitalProduct extends IProduct {
  downloadLink: string;
  fileSize: number;
}

interface IPhysicalProduct extends IProduct {
  weight: number;
  length: number;
  width: number;
  height: number;
  shippingCost: number;
}

export default IProduct;
