import React from 'react';

import { WebView } from 'react-native';

// Stateless COMPONENT possuindo apenas o render();

const Product = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.product.url }} />
);

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title,
});

export default Product;