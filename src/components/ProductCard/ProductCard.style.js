import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6cd',
    marginRight: 15,
    marginBottom: 15,
    maxHeight: Dimensions.get('window').height / 2.3,
    padding: 5,
    borderRadius: 10
  },
  imageContainer: {
    height: 200,
    margin: 10,
  },
  image: {
    height: '100%'
  },
  innerContainer: {
    marginLeft: 10,
    marginRight: 10,
    height: '100%'
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  stock: {
    color: 'red',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
