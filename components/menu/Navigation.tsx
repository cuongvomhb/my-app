import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import HomeScreen from "@/app/(home)";
import ReportScreen from "@/app/(report)/report";
import CustomHeader from "../layout/Header";
import UserProfile from "../user/Profile";
import NotFoundScreen from "@/app/+not-found";

const Drawer = createDrawerNavigator();

const menuItems = [
  { label: "Home", icon: "home", route: "index", component: HomeScreen },
  { label: "Report", icon: "bar-chart", route: "report", component: ReportScreen },
];

const screenOptions = ({ navigation }: any) => ({
  headerShown: true,
  header: () => <CustomHeader title={""} navigation={navigation} />,
});

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="index"
      drawerContent={(props) => <CustomDrawer {...props} menuItems={menuItems} />}
      screenOptions={screenOptions}
    >
      {menuItems.map((item) => (
        <Drawer.Screen key={item.route} name={item.route} component={item.component} />
      ))}
      <Drawer.Screen
        name="profile"
        component={UserProfile}
      />
      <Drawer.Screen
        name="*"
        component={NotFoundScreen}
        options={{ title: "Not Found" }}
      />
    </Drawer.Navigator>
  );
}
