    import React from "react";
    import { useDispatch } from "react-redux";
    import { itemsDeleted,addQuantity, removeQuantity } from "../reducers/cartSlice";
    import { toast } from "react-toastify";
    const CartItems = (props)=>{
        const { image,title,price,quantity,id }=props.item 
        const dispatch = useDispatch();
        function deleteItem(){
            dispatch(itemsDeleted(id));
            toast.success("Product deleted")

        }
        function quantityAdded() {
            dispatch(addQuantity({ id }));
        }

        function quantityRemoved() {
            dispatch(removeQuantity({ id }));
        }
        return(
            <>
            <div className="cart-item">
                <img src={image} height="60px"/>
                <div className="title">{title}</div>
                
                <div className="price">{price}</div>             
               
                <button onClick={quantityRemoved}>-</button>
                <div className="quantity">{quantity}</div>
                <button onClick={quantityAdded}>+</button>
                <button onClick={deleteItem}>Remove Item</button>
            </div>
            </>
        )
    }
    export default CartItems