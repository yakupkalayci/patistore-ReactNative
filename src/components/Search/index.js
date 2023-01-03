import React from "react";
import { TextInput } from "react-native";

import styles from './Search.style';

export default function Search({placeholdeer, value, onType}) {
    return(
    <TextInput
      placeholder={placeholdeer}
      value={value}
      onChangeText={onType}
      style={styles.input}
    />
  );
}