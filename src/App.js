/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';

import ProductCard from './components/ProductCard';
import {productData} from './assets/productData';

import styles from './App.style';

const App = () => {
  const renderProduct = ({item}) => <ProductCard product={item} />;
  const productKey = ({item}) => item.id;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        <Text style={styles.header_first}>RN</Text>
        <Text>Store</Text>
      </Text>
      <FlatList data={productData} renderItem={renderProduct} numColumns={2} />
    </SafeAreaView>
  );
};

export default App;
