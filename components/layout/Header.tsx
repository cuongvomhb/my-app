import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import IconView from "../ultils/IconView";

const CustomHeader = ({ title, navigation }: any) => {
  return (
    <View style={styles.header}>
      <View style={styles.group1}>
        {/* Menu Button */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <IconView name={"bars"} />
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      {/* Avatar */}
      <TouchableOpacity onPress={() => navigation.navigate("profile")}>
        <Image source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }} style={styles.avatar} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
  },
  group1: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
});

export default CustomHeader;