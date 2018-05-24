import {
    put,
    takeLatest,
    takeEvery
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/product";
import { AdminCreators } from './../actionCreators/adminCreators';
import {
    GET_PRODUCTS, ADD_PRODUCT
} from "../actionTypes/product";
import {GET_PRODUCT} from './../actionTypes/product';
import { AdminType } from './../actionTypes/admin';

let URI = "http://192.168.155.2:4000";

function* getProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* deleteProducts(action) {
    try {
        let product = yield fetch(`${URI}/products/${action.id}`, {
            method: 'DELETE',
            headers: {
            'content-type': 'application/json'
            },
        });
        yield put(AdminCreators.deleteProductSuccess(action.id))
    } catch(error) {
        yield put(AdminCreators.deleteProductFailure())
    }
}

function* productDetails() {
    try {
        let productDetail = yield fetch(`${URI}/products/${id}`).then(r => r.json());
        yield put(actionCreators.getProductSuccess(productDetail));
    } catch(error) {
        yield put(actionCreators.getProductFailure(error));
    }
}

function* addProduct(action) {
    try {
        let product = yield fetch(`${SERVICE_URL}/products`, {
            body: JSON.stringify(action.product),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        yield put(actionCreators.addProductSuccess(product))
        yield alert()
    } catch (error) {
        yield put(actionCreators.addProductFailure(error))
    }
}

export function* productWatchers() {
    console.log('testing');
    yield takeLatest(GET_PRODUCTS, getProducts);
    yield takeLatest(AdminType.DELETE_PRODUCT, deleteProducts);
    yield takeEvery(GET_PRODUCT, productDetails);
    yield takeEvery(ADD_PRODUCT, addProduct)
}
