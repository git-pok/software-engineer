import { CART_ADD, CART_DELETE } from "./actionTypes";

const addToCart = item => (
  {
    type: CART_ADD,
    item
  }
)

const deleteFromCart = id => (
  {
    type: CART_DELETE,
    id
  }
)

export { addToCart, deleteFromCart };