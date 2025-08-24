import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Restaurant } from "../types";

type CartContextType = {
  items: CartItem[];
  addToCart: (restaurant: Restaurant, dishId: string) => void;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
});

export default function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (restaurant: Restaurant, dishId: string) => {
    const dish = restaurant.dishes.find((d) => d.id === dishId);
    if (!dish) return;

    const newCartItem: CartItem = {
      dishId: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      quantity: 1,
      restaurantId: restaurant.id,
    };
    setItems([newCartItem, ...items]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
