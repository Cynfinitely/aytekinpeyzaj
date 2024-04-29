import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { CartState } from "../../interfaces";

const initialCartState: CartState = {
  cartProducts:
    typeof window !== "undefined" && localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") || "")
      : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.name === action.payload.name
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartProducts.push(tempProduct);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cartProducts));
      }
      toast.success("Item Added to Cart  Successfully");
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartProducts.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    removeProduct: (state, action) => {
      let index = state.cartProducts.indexOf(action.payload);
      state.cartTotalQuantity -= action.payload;
      state.cartProducts.splice(
        state.cartProducts.findIndex(
          (product: any) => product._id === action.payload._id
        ),
        1
      );
      state.cartProducts = [...state.cartProducts];
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cartProducts));
      }
    },
    cartProducts: () => {
      return initialCartState;
    },
  },
  extraReducers: (builder) => {},
});

export const { cartProducts, addToCart, getTotals, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
