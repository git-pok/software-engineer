import products from "../redux-shoply/data.json";

const INITIAL_STATE = JSON.parse(JSON.stringify([products.products]));
const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TEST":
            return state;
    }
}

export default productsReducer;

