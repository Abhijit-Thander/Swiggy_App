import { Restaurant } from "@/assets/data/Restuarants";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type CartContextType = {
  items: Restaurant[];
  addCart: (restaurant: Restaurant) => void;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addCart: () => {},
});

export default function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<Restaurant[]>([]);

  const addCart = (restaurant: Restaurant) => {
    const newCartItem: any = {
      id: "1",
      restaurant,
      quantity: 1,
      dishes: restaurant.dishes,
    };

    setItems([newCartItem, ...items]);
  };

  console.log(items);
  return (
    <CartContext.Provider value={{ items, addCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
