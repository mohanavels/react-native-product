import {productWatchers} from "./product";
import {searchWatchers} from './search';
import { fork } from 'redux-saga/effects';

export default function* rootWatchers() {
    yield fork(productWatchers)
    yield fork(searchWatchers)
}
