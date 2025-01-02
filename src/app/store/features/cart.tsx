import { Cart } from "@/app/utils/type";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];
export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    //add to cart
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newObj = { ...action.payload, uuid };
      state.push(newObj);
    },
    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },
    addCart(state,action){
      const obj = state.find(
        (valu) =>
        valu.id == action.payload.id  );
       if (obj) {
        ++obj.qty;
        const newstate = state.filter((valu)=>valu.id!==obj?.id)
        state = [...newstate,obj];
        return;
       }
    },

    subCart(state,action){
      const obj = state.find(
        (valu) =>
        valu.id == action.payload.id );
       if (obj !== undefined) {
        if (obj.qty<=1){
          return state.filter((valu)=>valu.uuid!== obj.uuid)
        }
        --obj.qty;
        const newstate = state.filter((valu)=>valu.uuid!==obj?.uuid)
        state = [...newstate,obj];
        return;
       }
    },

    clearCart(state) {
      // Clear the cart
      return [];
    },
  },
});

export const { addToCart, delItem, addCart, subCart , clearCart } = cartSlice.actions;

export default cartSlice.reducer;
