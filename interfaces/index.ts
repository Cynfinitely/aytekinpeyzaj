// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

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
