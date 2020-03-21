import {
    FETCH_ALL_PRODUCTS_SUCCESS,
    GET_BY_CATEGORY_SUCCESS,
    GET_SINGLE_PRODUCT_SUCCESS
} from "../actions/productsActions";

const initialState = {
    products: [],
    singleProduct: null
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS_SUCCESS:
            return {...state, products: action.products};
        case GET_BY_CATEGORY_SUCCESS:
            return {...state, products: action.products};
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {...state, singleProduct: action.product};
        default:
            return state;
    }
};

export default productsReducer;
