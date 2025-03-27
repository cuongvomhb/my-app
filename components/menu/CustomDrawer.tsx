import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import IconView from "../ultils/IconView";
import { CustomDrawerProps } from "../ultils/types/menu-type";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import globalStyles from "@/constants/GlobalStyles";

const CustomDrawer = ({ navigation, menuItems } : CustomDrawerProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={globalStyles.menuItem}
            onPress={() => navigation?.navigate(item.route)}
          >
            <IconView name={item.icon as React.ComponentProps<typeof FontAwesome>['name']} />
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CustomDrawer;