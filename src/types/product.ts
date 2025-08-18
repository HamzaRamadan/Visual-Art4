// types/product.ts
export interface Product {
  img: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  images?: string[]; // جعلناها اختيارية باستخدام ?
}