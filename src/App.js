/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';

import ProductCard from './components/ProductCard';
import Search from './components/Search';

import {productData} from './assets/productData';

import styles from './App.style';

const App = () => {
  const [searchVal, setSearchVal] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const renderProduct = ({item}) => <ProductCard product={item} />;
  const productKey = item => item.id;

  useEffect(() => {
    const filterSearch = products => {
      const filtered = products.filter(product => {
        const title = product.title.toLowerCase();
        return title.indexOf(searchVal.toLowerCase()) > -1;
      });
      return filtered;
    };
    setFilteredProducts(filterSearch(productData));
  }, [searchVal]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        <Text style={styles.header_first}>RN</Text>
        <Text>Store</Text>
      </Text>
      {!filteredProducts.length ? (
        <Text style={styles.infoMessage}>Ürün Bulunamadı!</Text>
      ) : null}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        numColumns={2}
        ListHeaderComponent={
          <Search
            placeholdeer="Ara.."
            value={searchVal}
            onType={setSearchVal}
          />
        }
        keyExtractor={productKey}
      />
    </SafeAreaView>
  );
};

export default App;
