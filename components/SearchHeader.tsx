import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faMagnifyingGlass,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

type SearchHeaderProps = {};

const SearchHeader: React.FC<SearchHeaderProps> = () => {
  return (
    <View style={styles.header}>
      <Pressable style={styles.iconButton}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} style={styles.pinkColor} />
      </Pressable>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={14} style={{ color: 'white', marginLeft: 22 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar en Snacks"
          placeholderTextColor="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FF4080',
    alignItems: 'center',
    borderRadius: 25,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 14,
    paddingVertical: 12,
    paddingLeft: 13,
  },
  pinkColor: {
    color: '#FF4080',
  },
});

export default SearchHeader;