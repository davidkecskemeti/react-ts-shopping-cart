import React from "react";

//Styles
import "./CartItem.scss";

//Components
import Button from "@material-ui/core/Button";

interface CartItemProps {
  item: CartItemType;
  addToCart: AddToCartType;
  removeFromCart: RemoveFromCartType;
}
const CartItem: React.FC<CartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => (
  <div className={"cart-item-wrapper"}>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </div>
);

export default CartItem;
