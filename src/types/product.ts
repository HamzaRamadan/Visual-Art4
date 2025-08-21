// types/product.ts
export interface Product {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imgList: any;
  img: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  images?: string[]; 
}