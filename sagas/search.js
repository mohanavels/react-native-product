import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { searchAction } from './../actionCreators/search';
import { SEARCH_PRODUCT } from './../actionTypes/search';
import * as actionCreators from './../actionCreators/search';

let URI = "http://192.168.155.2:4000";
function* getSearchProduct(action) {
    
    try {
      //  console.log('try function triggered');
        let products = yield fetch(`${URI}/products?_page=1&_limit=8&title_like=${action.searchValue}`).then(r => r.json());
        yield put(actionCreators.getSearchSuccess(products));
    } catch (error) {
        yield put(actionCreators.getSearchFailure(error));
    }
}

export function* searchWatchers() {
    yield takeEvery("GET_SEARCH_PRODUCT", getSearchProduct);
}