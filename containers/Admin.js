import React, { Component } from "react";
import ProductListWithFlatList from './ProductListWithFlatList';
import {View} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActionCreators from "../actionCreators/product";

export default class Admin extends Component {
    render() {
        return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <ProductListWithFlatList icon={'ios-trash'} actionType='delete'/>
        </View>
        );
    }
}

