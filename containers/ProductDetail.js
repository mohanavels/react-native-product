import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productAction from './../actionCreators/product';

let URI = "http://192.168.155.2:4000";

class ProductDetail extends React.Component {
  //static navigationOptions = { title: "Product Detail" };
  static navigationOptions = ({ navigation }) => ({
    title: `Product Detail for ${navigation.state.params.id}`
  });

  constructor(props) {
    super(props);    
  }

  componentDidMount() {
    let { id } = this.props.navigation.state.params;
    this.props.actions.getProduct(id);
  }

   renderProduct() {
    const { navigation } = this.props;
    const product  = this.props.product;
    return (<View>
      <Image
      source={product.image ? { uri: `${SERVICE_URL}/images/${product.image}` } : require("../assets/barcode.png")}
      style={{ height: 200, marginTop: 20 }}
      resizeMode="contain"
    />
    <Text style={styles.title}>{product.id} - {product.title}</Text>
    <Text style={[styles.title, { fontSize: 16 }]}>
      {product.additionalInfo && `(${product.additionalInfo})`}
    </Text>
    </View>)
   }

  render() {

    return (
      <View style={styles.container}>
        {this.props.isLoading ? (
          <ActivityIndicator size="large" color="#00ff80" />
        ) : (
            this.renderProduct()
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    padding: 10
  },
  title: {
    fontSize: 24,
    padding: 10
  }
});

var mapStatetoProps = (state) => {
  return {
    product: state.productState ? state.productState.product: {},
    loading: state.productState ? state.productState.isLoading: false
  }
}

var mapdispatchtoProps = (dispatch) => {
  return {
    actions: bindActionCreators(productAction, dispatch)
  }
}
var connectedProductDetail = connect(mapStatetoProps,mapdispatchtoProps )(ProductDetail);

export { connectedProductDetail as ProductDetail}

