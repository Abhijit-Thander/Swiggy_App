export type Restaurant = {
  id: string;
  name: string;
  location: string;
  rating: number;
  deliveryTime: string;
  discount?: string; // optional
  image: any;
  isVeg: boolean;
  dishes: {
    id: string;
    name: string;
    description: string;
    image: any;
    price: number;
    isVeg: boolean;
  }[];
};

export type CartItem = {
  dishId: string;
  name: string;
  price: number;
  quantity: number;
  image: any;
  
  restaurantId: string; // to know which restaurant the dish belongs to
};
