interface Product {
  id: number;
  title: string;
  price: number;
  imageSrc: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Test product",
    price: 100,
    imageSrc: "/assets/products-images/colcha-01.jpeg",
  },
];
