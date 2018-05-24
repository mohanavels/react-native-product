import { AdminType } from './../actionTypes/admin';

const inititalState = {
    loading: true
}
export default adminReducer = (prevState= inititalState, action) =>{
    switch(action.type) {
        case AdminType.DELETE_PRODUCT: 
            return {
                ...prevState,
                loading: false
            }

        // case AdminType.DELETE_PRODUCT_SUCCESS: 
        //     return {
        //         ...prevState,
        //         loading: false,
        //         products: prevState.products.filter(Product => Product.id !== action.id)
        //     }
        case AdminType.DELETE_PRODUCT_FAILURE: 
            return {
                ...prevState,
                loading: false
            }    
        default: 
            return prevState    
    }
}