import { createContext, useContext, useState, type ReactNode,} from "react";

type WishlistItem = {
  id: string | number;
  name: string;
  image: string;
  selectedSize: string;
  price: string | number;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  isWishlisted: (id: string | number) => boolean;
};

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((previousWishlist) => {
      const alreadyExists = previousWishlist.some(
        (product) => product.id === item.id
      );

      if (alreadyExists) {
        return previousWishlist.filter(
          (product) => product.id !== item.id
        );
      }

      return [...previousWishlist, item];
    });
  };

  const isWishlisted = (id: string | number) => {
    return wishlist.some((product) => product.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}