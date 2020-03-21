import axiosApi from "../../axiosApi";

export const FETCH_ALL_PRODUCTS_SUCCESS = 'FETCH_ALL_PRODUCTS_SUCCESS';
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS';
export const GET_BY_CATEGORY_SUCCESS = 'GET_BY_CATEGORY_SUCCESS';

const fetchAllProductsSuccess = products => ({type: FETCH_ALL_PRODUCTS_SUCCESS, products});
const getSingleProductSuccess = product => ({type: GET_SINGLE_PRODUCT_SUCCESS, product});
const getByCategorySuccess = products => ({type: GET_BY_CATEGORY_SUCCESS, products});

export const fetchProducts = () => {
    return async dispatch => {
        try {
            const result = await axiosApi.get('/products');
            dispatch(fetchAllProductsSuccess(result.data));
        } catch(e){
            console.error(e);
        }
    }
};

export const getSingleProduct = (productId) => {
    return async dispatch => {
        try {
            const result = await axiosApi.get('/products?productId=' + productId);
            console.log(result.data);
            dispatch(getSingleProductSuccess(result.data));
        } catch(e){
            console.error(e);
        }
    }
};

export const getByCategory = (categoryId) => {
    return async dispatch => {
        try {
            const result = await axiosApi.get('/products/' + categoryId);
            dispatch(getByCategorySuccess(result.data));
        } catch (e){
            console.error(e);
        }
    }
};
