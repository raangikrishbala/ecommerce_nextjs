export interface Order {
  id: string;
  image: string;
  title: string;
  color?: string;
  price: number;
  deliveryDate: string;
  status: string;
}
