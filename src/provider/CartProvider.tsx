import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Restaurant } from "../types";

type CartContextType = {
  items: CartItem[];
  addToCart: (restaurant: Restaurant, dishId: string) => void;
  increaseQty: (dishId: string) => void;
  decreaseQty: (dishId: string) => void;
  totalPrice: number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
  totalPrice: 0,
  clearCart: () => {},
});

export default function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (restaurant: Restaurant, dishId: string) => {
    const dish = restaurant.dishes.find((d) => d.id === dishId);
    if (!dish) return;

    setItems((prev) => {
      const existing = prev.find((item) => item.dishId === dishId);
      if (existing) {
        return prev.map((item) =>
          item.dishId === dishId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const newCartItem: CartItem = {
        dishId: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        quantity: 1,
        restaurantId: restaurant.id,
      };
      return [newCartItem, ...prev];
    });
  };

  const increaseQty = (dishId: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.dishId === dishId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (dishId: string) => {
    setItems(
      (prev) =>
        prev
          .map((item) =>
            item.dishId === dishId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // remove if 0
    );
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        increaseQty,
        decreaseQty,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
