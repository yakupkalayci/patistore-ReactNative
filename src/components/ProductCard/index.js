import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './ProductCard.style';

export default function ProductCard({product}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.imgURL}} style={styles.image} />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {product.inStock ? null : <Text style={styles.stock}>Stokta Yok</Text>}
      </View>
    </View>
  );
}
