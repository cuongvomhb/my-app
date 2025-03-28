import React, { useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import IconView from '../ultils/IconView';

const TableComponent = ({
  data,
  onChange,
  config
}: any) => {
  const defaultState = {
    sortAscending: true,
    dataSorted: data
  }
  const [tableState, setTableState] = useState(defaultState);

  // Sort Data
  const onSort = (e: any) => {
    e.preventDefault();
    const sorted = [...defaultState.dataSorted].sort((a, b) =>
      tableState.sortAscending ? a.age - b.age : b.age - a.age
    );
    setTableState({
      ...tableState,
      dataSorted: sorted,
      sortAscending: !tableState.sortAscending,
    });
    onChange(sorted);
  };

  const SortIcon = useMemo(() => {
    return config?.sort &&
      (tableState.sortAscending ?
        <IconView name='arrow-up' onPress={onSort} size={8} /> :
        <IconView name='arrow-down' onPress={onSort} size={8} />);
  }, [tableState.sortAscending]);

  const renderHeader = (title: any) => {
    return (<DataTable.Title style={styles.headerTitle}>
      <View style={styles.viewText}>
        {title}
      </View>
      {SortIcon}
    </DataTable.Title>)
  };

  return (
    <View style={styles.tableView}>
      {/* DataTable */}
      <DataTable>
        <DataTable.Header>
          {renderHeader("Name")}
          {renderHeader("Age")}
          {renderHeader("City")}
        </DataTable.Header>

        {defaultState.dataSorted?.map((row: any) => (
          <DataTable.Row key={row.id}>
            <DataTable.Cell>{row.name}</DataTable.Cell>
            <DataTable.Cell>{row.age}</DataTable.Cell>
            <DataTable.Cell>{row.city}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  tableView: {
    padding: 20,
    height: 450,
    overflowY: 'auto'
  },
  headerTitle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  viewText: {
    marginRight: 2,
    maxWidth: '100%'
  }
});

export default TableComponent;