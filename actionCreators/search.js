import {SEARCH_PRODUCT} from './../actionTypes/search';


export function getSearchProduct(searchValue) {
        return {
            type: SEARCH_PRODUCT.GET_SEARCH_PRODUCT,
            searchValue
        }
}

export function getSearchSuccess(products) {
        return {
            type: SEARCH_PRODUCT.SEARCH_PRODUCT_SUCCESS,
            products
        }
}

export function getSearchFailure(error) {
    return {
        type: SEARCH_PRODUCT.SEARCH_PRODUCT_FAILURE,
        error
    }
}