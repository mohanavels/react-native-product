import React, { Component} from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {SEARCH_PRODUCT} from './../actionTypes/search';
import { bindActionCreators } from 'redux';
import * as searchAction from './../actionCreators/search';
import ProductListItem from './../components/ProductListItem';

let URI = "http://192.168.155.2:4000";
class SearchPage extends Component {
    constructor() {
        super();       
    }

    getSearchResult(value) {
        const {dispatch} = this.props;
        this.props.actions.getSearchProduct(value);
    }

    _keyExtractor = (item, index) => {
        return `${index}`;
      };
    
    _renderItem = ({ index, item }) => {
    return (
        <ProductListItem
        {...this.props}
        id={item.id}
      title={`${item.id} - ${item.title}`}
      image={item.image ? `${URI}/images/${item.image}` : null}
        rating={item.rating}
        price={item.price}
        wish={item.wish || false}
        onWishTapped={this.onWishTapped}
        />
    );
    };

    render() {
        return (
            <View>
                <Text>Search Component</Text>
                <TextInput style={{height: 40}}  placeholder='Search here' onChangeText={this.getSearchResult.bind(this)}/>
                <FlatList
                data={this.props.searchResult}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
              />
            </View>
        )
    }
}

const mapStatetoprops = (state) => {
return {
    searchResult: state.searchState ? state.searchState.products: {}
}
}

const mapDispatchToProps =(dispatch) => {
    return {
        actions: bindActionCreators(searchAction, dispatch)
    }
}
export default connect(mapStatetoprops, mapDispatchToProps)(SearchPage);