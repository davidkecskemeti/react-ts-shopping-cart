import Button from "@material-ui/core/Button";
//Styles
import "./Item.scss";

interface ItemProps {
  item: CartItemType;
  handleAddToCart: HandleAddToCartType;
}

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => (
  <div className={"item-wrapper"}>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </div>
);

export default Item;
