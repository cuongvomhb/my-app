import MainLayout from "@/components/layout/_layout";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import LineChartComponent from "../../components/report/LineChart";
import BarChartComponent from "@/components/report/BarChart";
import PieChartComponent from "@/components/report/PieChart";
import TableComponent from "@/components/table/TableComponent";
import CustomFilterComponent from "@/components/table/CustomFilter";

const ReportScreen = () => {
  const sampleData = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 35, city: "Chicago" },
    { id: 4, name: "David", age: 28, city: "San Francisco" },
  ];
  const config = {
    search: true,
    sort: true,
    originalData: sampleData
  }

  const [tableData, setTableData] = React.useState(sampleData);

  const onChange = (data: any) => {
    setTableData(data);
  }

  return (
    <MainLayout>
      <ScrollView style={styles.container}>
        <LineChartComponent />
        <BarChartComponent />
        <PieChartComponent />
        <SectionContainer title="Data Table">
          <CustomFilterComponent data={tableData} onChange={onChange} config={config}/>
          <TableComponent data={tableData} onChange={onChange} config={config}/>
        </SectionContainer>
      </ScrollView>
    </MainLayout>
  );
};

const SectionContainer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default ReportScreen;
