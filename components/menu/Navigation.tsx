import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import HomeScreen from "@/app/(home)";
import ReportScreen from "@/app/(report)";
import CustomHeader from "../layout/Header";
import UserProfile from "../user/Profile";
import NotFoundScreen from "@/app/+not-found";

const Drawer = createDrawerNavigator();

const menuItems = [
  { label: "Home", icon: "home", route: "index" },
  { label: "Report", icon: "bar-chart", route: "report" },
];

const screenOptions = ({ navigation }: any) => ({
  headerShown: true,
  header: () => <CustomHeader title={""} navigation={navigation} />,
});

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} menuItems={menuItems} />}
      screenOptions={screenOptions}
    >
      {menuItems.map((item) => (
        <Drawer.Screen key={item.route} name={item.route} component={getComponent(item.route)} />
      ))}
      <Drawer.Screen
        name="profile"
        component={UserProfile}
      />
      <Drawer.Screen
        name="notfound"
        component={NotFoundScreen}
        options={{ title: "Not Found" }}
      />
      <Drawer.Screen
        name="*"
        component={NotFoundScreen}
        options={{ title: "Not Found" }}
      />
    </Drawer.Navigator>
  );
}

function getComponent(route: string) {
  switch (route) {
    case "index":
      return HomeScreen;
    case "report":
      return ReportScreen;
    default:
      return NotFoundScreen;
  }
}
