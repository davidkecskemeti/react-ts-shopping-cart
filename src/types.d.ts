type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

type HandleAddToCartType = (clickedItem: CartItemType) => void;

type AddToCartType = (clickedItem: CartItemType) => void;

type RemoveFromCartType = (id: number) => void;
