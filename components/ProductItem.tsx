import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

type ProductItemProps = {
  item: {
    price: string;
    name: string;
    image: string;
  };
};

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemContainerTop}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemDetailContainer}>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Pressable>
            <FontAwesomeIcon icon={faPlusCircle} size={18} style={styles.pinkColor} />
          </Pressable>
        </View>
      </View>
      <Text style={[styles.itemName, styles.pinkColor]}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 150,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  itemContainerTop: {
    alignItems: 'center',
  },
  itemImage: {
    width: 130,
    height: 130,
    marginBottom: 5,
  },
  itemDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  itemPrice: {
    fontWeight: 'bold',
  },
  pinkColor: {
    color: '#FF4080',
  },
});

export default ProductItem;