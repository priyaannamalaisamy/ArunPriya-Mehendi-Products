import { createContext, useContext, useState } from "react";

type CartItem = {
  id: number | string;
  name: string;
  image: string;
  selectedSize: string;
  price: number | string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((previousCart) => [...previousCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}