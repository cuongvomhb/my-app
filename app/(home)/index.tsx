import MainLayout from "@/components/layout/_layout";
import { OriginalLinkComponent } from "@/components/ultils/OriginalLink";
import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (<MainLayout>
    <Text>Home index</Text>
    <View>
      <OriginalLinkComponent href="/report">Click here to report</OriginalLinkComponent>
    </View>
  </MainLayout>)
}