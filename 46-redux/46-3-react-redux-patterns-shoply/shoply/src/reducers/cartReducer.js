const INITIAL_STATE = { cart: {} };

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CART_ADD":
            const item = JSON.parse(JSON.stringify(action.item));
            const itemAddId = item.id;
            const cartState = JSON.parse(JSON.stringify(state.cart));
            const cartItem = cartState[itemAddId];
            if (cartItem) cartState[itemAddId].qty = cartState[itemAddId].qty + 1;
            if (!cartItem) item.qty = item.qty + 1;
            if (!cartItem) cartState[itemAddId] = item;
            return {
                cart: {
                    ...cartState
                }
            }
        case "CART_DELETE":
            const itemToDelId = action.id;
            const reduxCartItems = JSON.parse(JSON.stringify(state.cart));
            const toDeleteCartItemQty = reduxCartItems[itemToDelId] ? reduxCartItems[itemToDelId].qty : null;
            if (toDeleteCartItemQty === 1) delete reduxCartItems[itemToDelId];
            else if (toDeleteCartItemQty && toDeleteCartItemQty > 1) reduxCartItems[itemToDelId].qty = toDeleteCartItemQty - 1;
            return {
                cart: reduxCartItems
            }
        default:
            return state;
    }
}

export default cartReducer;

