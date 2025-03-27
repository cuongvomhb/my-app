import MainLayout from "@/components/layout/_layout";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import LineChartComponent from "../../components/report/LineChart";
import BarChartComponent from "@/components/report/BarChart";

const ReportScreen = () => {
  const tableData = [
    { month: "January", sales: 30 },
    { month: "February", sales: 20 },
    { month: "March", sales: 50 },
    { month: "April", sales: 40 },
  ];

  return (
    <MainLayout>
      <ScrollView style={styles.container}>
        <LineChartComponent />
        <BarChartComponent />
        <TableSection title="Data Table" data={tableData} />
      </ScrollView>
    </MainLayout>
  );
};

const TableSection = ({
  title,
  data,
}: {
  title: string;
  data: { month: string; sales: number }[];
}) => (
  <SectionContainer title={title}>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Month</DataTable.Title>
        <DataTable.Title numeric>Sales</DataTable.Title>
      </DataTable.Header>
      {data.map((row, index) => (
        <DataTable.Row key={index}>
          <DataTable.Cell>{row.month}</DataTable.Cell>
          <DataTable.Cell numeric>{row.sales}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  </SectionContainer>
);

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
