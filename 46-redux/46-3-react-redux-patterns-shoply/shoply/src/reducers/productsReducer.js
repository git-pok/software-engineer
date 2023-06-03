import products from "../redux-shoply/data.json";

// const INITIAL_STATE = JSON.parse(JSON.stringify([products.products]));
const INITIAL_STATE = JSON.parse(JSON.stringify(products.products));
const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TEST":
            return state;
        default:
            return state;
    }
}

export default productsReducer;

