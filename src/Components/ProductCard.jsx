import { useDispatch } from "react-redux";
import { itemsAdded } from "../reducers/cartSlice";
import { toast } from "react-toastify";


const ProductCard = (props) => {
  console.log(props.product);
  const { title, description, price, image } = props.product || {};
  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(itemsAdded(props.product));
    toast.success("Product added to the cart");
  };

  const buyNow = () => {
    // Add your buy now logic here
    toast.info("Buy Now clicked");
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <div className="price">${price}</div>
      <div className="button-container">
        <button onClick={addItems} className="add-to-cart">Add To Cart</button>
        <button onClick={buyNow} className="buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
