import {AdminType} from './../actionTypes/admin';
import { Vibration, Alert } from 'react-native';

export const AdminCreators = {
    deleteProduct: (id) => {
        return {
            type: AdminType.DELETE_PRODUCT,
            id
        }
    },
    deleteProductSuccess: (id) => {
        Alert.alert('Success','Product Saved Successfully');
        Vibration.vibrate(1000);
        return {
            type: AdminType.DELETE_PRODUCT_SUCCESS,
            id
        }
    },
    deleteProductFailure: () => {
        return {
            type: AdminType.DELETE_PRODUCT_FAILURE
        }
    }
}