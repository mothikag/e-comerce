import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items: []
    },
    reducers: {
        itemsAdded: (state,action) =>{
            const addedItem=state.items.find((x)=>x.id===action.payload.id)
            if(addedItem){
                addedItem.quantity +=1
            }
            else{
                state.items.push({...action.payload, quantity: 1})

            }
        },
        itemsDeleted: (state,action)=>{
            state.items =state.items.filter((x)=> x.id !== action.payload);
            },
            addQuantity: (state, action) => {
                const item = state.items.find((x) => x.id === action.payload.id);
                if (item) {
                    item.quantity += 1;
                }
            },
            removeQuantity: (state, action) => {
                const item = state.items.find((x) => x.id === action.payload.id);
                if (item && item.quantity > 1) {
                    item.quantity -= 1;
                } else if (item && item.quantity === 1) {
                    state.items = state.items.filter((x) => x.id !== action.payload.id);
                }
            }
            

        
       
    }
})
export const {itemsAdded, itemsDeleted, addQuantity, removeQuantity} = cartSlice.actions
export default cartSlice.reducer
