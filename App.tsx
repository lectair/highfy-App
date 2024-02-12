import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  FlatList,
  SafeAreaView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSearch,
  faMagnifyingGlass,
  faChevronLeft,
  faBolt,
  faChevronDown,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const padding = 10;
const itemMargin = 5;
const numColumns = 2;
const itemWidth =
  (width - padding * 2 - itemMargin * (numColumns * 2)) / numColumns;

// Simulating content
const snacks = [
  {
    price: "2.49€",
    name: "Pringles Sour Cream",
    image: "https://placehold.co/150x150",
    key: "1",
  },
  {
    price: "1.19€",
    name: "Pipas Tijuana Grandes",
    image: "https://placehold.co/150x150",
    key: "2",
  },
  {
    price: "1.49€",
    name: "Ruffles York’eso",
    image: "https://placehold.co/150x150",
    key: "3",
  },
  {
    price: "0.99€",
    name: "Twix 1 Unidad",
    image: "https://placehold.co/150x150",
    key: "4",
  },
  {
    price: "0.99€",
    name: "Phoskitos 1 Unidad",
    image: "https://placehold.co/150x150",
    key: "5",
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <Pressable style={styles.iconButton}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={20}
            style={styles.pinkColor}
          />
        </Pressable>
        <View style={styles.searchContainer}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size={14}
            style={{ color: "white", marginLeft: 22 }}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar en Snacks"
            placeholderTextColor="white"
          />
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <FontAwesomeIcon icon={faBolt} size={20} style={styles.pinkColor} />
        <Pressable style={styles.categoryButton}>
          <Text style={styles.buttonText}>Categoría: Snacks </Text>
          <FontAwesomeIcon icon={faChevronDown} size={12} style={styles.icon} />
        </Pressable>
        <Pressable style={styles.categoryButton}>
          <Text style={styles.buttonText}>Ordenar por </Text>
          <FontAwesomeIcon icon={faChevronDown} size={12} style={styles.icon} />
        </Pressable>
      </View>

      <FlatList
        data={snacks}
        numColumns={2}
        style={styles.gridContainer}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemContainerTop}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetailContainer}>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <Pressable>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    size={18}
                    style={styles.pinkColor}
                  />
                </Pressable>
              </View>
            </View>
            <View>
              <Text style={[styles.itemName, styles.pinkColor]}>
                {item.name}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    backgroundColor: "white",
  },

  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FF4080",
    alignItems: "center",
    borderRadius: 25,
  },

  searchInput: {
    flex: 1,
    color: "white",
    fontSize: 14,
    paddingVertical: 12,
    paddingLeft: 13,
  },

  icon: {
    color: "#FF4080",
    marginLeft: 5,
  },

  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    alignItems: "center",
  },

  categoryButton: {
    backgroundColor: "white",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#FF4080",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  buttonText: {
    color: "#FF4080",
    fontWeight: "bold",
  },

  gridContainer: {
    paddingHorizontal: padding,
  },

  itemContainer: {
    width: itemWidth,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: itemMargin,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  itemContainerTop: {
    alignItems: "center",
  },

  itemImage: {
    width: itemWidth - 20,
    height: itemWidth - 20,
    marginBottom: 5,
  },

  itemDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  itemPrice: {
    fontWeight: "bold",
  },

  itemName: {
    marginTop: 5,
    color: "#FF4080",
    fontWeight: 600,
  },

  pinkColor: {
    color: "#FF4080",
  },
});

export default App;
