import { StaticImageData } from "next/image";

export type User = {
  id: number;
  name: string;
};

export interface IProduct {
  id: string;
  name: string;
  liter: number[];
  url: string;
  description: string;
  image: StaticImageData;
}

export interface IProductProps {
  product: IProduct;
}

export interface IProductListProps {
  products: IProduct[];
}

export interface CarouselProps {
  items: string[];
}
