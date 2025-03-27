import MainLayout from "@/components/layout/_layout";
import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (<MainLayout>
    <Text>Home index</Text>
    <View>
      <Link href="/report">Click here to report</Link>
    </View>
  </MainLayout>)
}