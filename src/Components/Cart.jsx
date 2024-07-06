import { useSelector } from "react-redux";
import CartItems from "./CartItems";
function Cart(){
    const items=useSelector((state)=> state.cart.items)
    return(
        <>
        {/* <div><center>Cart</center></div> */}

        {/* <div>{JSON.stringify(items)}</div> */}
        {items.map((item)=><CartItems item={item}/>)}
        </>
    )
}
export default Cart