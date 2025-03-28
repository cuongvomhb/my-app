import React, { useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const PieChartComponent = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);
  const pieData = [
    { name: "Groceries", value: 40, color: "#f44336", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Rent", value: 30, color: "#2196F3", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Entertainment", value: 15, color: "#4CAF50", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Savings", value: 15, color: "#FFEB3B", legendFontColor: "#7F7F7F", legendFontSize: 12 },
  ];
  const chartColors = { from: "#ff9800", to: "#ff5722" }

  // Function to update screen width when resized
  const updateScreenWidth = () => {
    setScreenWidth(Dimensions.get("window").width);
  };

  // Add event listener for screen resize
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", updateScreenWidth);
    return () => subscription.remove(); // Cleanup listener to prevent memory leaks
  }, []);

  return (
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Monthly Expenses</Text>

      <PieChart
        data={pieData}
        width={screenWidth * 0.9} // Adjust dynamically to screen size
        height={220}
        chartConfig={{
          backgroundGradientFrom: chartColors?.from || "#ff9800",
          backgroundGradientTo: chartColors?.to || "#ff5722",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="value" // Defines which data property represents values
        backgroundColor="transparent"
        paddingLeft="15"
        absolute // Shows percentage labels inside the chart
      />
    </View>
  );
};

export default PieChartComponent;