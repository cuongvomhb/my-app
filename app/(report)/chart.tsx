import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2, // Line thickness
    },
  ],
};

export default function ChartScreen() {
  return (
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Sales Data</Text>

      {/* Line Chart */}
      <LineChart
        data={data}
        width={screenWidth * 0.9} // Adjust width to fit the screen
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        bezier // Makes the chart smooth
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  );
}