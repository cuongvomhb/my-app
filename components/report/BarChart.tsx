import React, { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [50, 80, 40, 70, 90, 30],
    },
  ],
};

export default function BarChartComponent() {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);

  // Function to update screen width when resized
  const updateScreenWidth = () => {
    setScreenWidth(Dimensions.get("window").width);
  };

  // Add event listener for screen resize
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", updateScreenWidth);
    
    // Cleanup function
    return () => {
      subscription.remove(); // Prevent memory leaks
    };
  }, []);
  
  return (
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Monthly Sales</Text>

      <BarChart
        data={barData}
        width={screenWidth * 0.9} // Adjust width to fit the screen
        height={220}
        yAxisLabel="$"
        yAxisSuffix="" // Add an empty suffix or customize as needed
        chartConfig={{
          backgroundColor: "#6a1b9a",
          backgroundGradientFrom: "#8e24aa",
          backgroundGradientTo: "#d81b60",
          decimalPlaces: 0, // No decimal places for bar chart
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        verticalLabelRotation={30} // Rotate labels for better visibility
        showValuesOnTopOfBars
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  );
}
