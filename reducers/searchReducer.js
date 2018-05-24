import {SEARCH_PRODUCT } from './../actionTypes/search';

const initialState = {
    isLoading: false,
    products: {}
}

export default searchReducer = (prevState = initialState, action) => {
    switch(action.type) {
        case SEARCH_PRODUCT.GET_SEARCH_PRODUCT: 
            return {
                ...prevState,          
                isLoading: true
            }
        case SEARCH_PRODUCT.SEARCH_PRODUCT_SUCCESS: 
            return {
                ...prevState,
                products: action.products
            }
        case SEARCH_PRODUCT.SEARCH_PRODUCT_FAILURE:
            return {
                error: action.error
            }        
            default:
            return prevState;
    }
}