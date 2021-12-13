import { CartActionTypes } from "./cart.types";
const { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } = CartActionTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type: ADD_ITEM,
  item
})

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  item
})

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item
})