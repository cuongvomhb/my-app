import React from "react";
import GlobalStyles from "@/constants/GlobalStyles";
import { View } from "react-native";

const MainLayout = ({ children }: any) => {

  return (<View style={GlobalStyles.container}>
    <View style={GlobalStyles.bodyContainer}>
      {children}
    </View>
  </View>)
}

export default MainLayout;