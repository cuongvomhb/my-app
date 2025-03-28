import React, { useEffect, useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

const CustomFilterComponent = ({ config, data, onChange }: any) => {
  const defaultState = {
    searchQuery: "",
    sortAscending: true
  }

  const [filterState, setFilterState] = useState(defaultState);

  const handleOnSearch = () => {
    const filteredData = data?.filter((item: any) =>
      item.name.toLowerCase().includes(filterState?.searchQuery.toLowerCase())
    );
    onChange(filteredData);
  }

  const onSearchChange = (text: string) => {
    setFilterState({ ...filterState, searchQuery: text });
  }

  useEffect(() => {
    if (filterState.searchQuery === "") {
      onChange(config?.originalData);
    }
  }, [filterState.searchQuery]);

  return (
    <>
      {config?.search &&
        <TextInput
          placeholder="Search by name or city..."
          value={filterState?.searchQuery}
          onChangeText={onSearchChange}
          onKeyPress={handleOnSearch}
          style={styles.searchInput}
        />}
    </>
  );
};
const styles = StyleSheet.create({
  filterView: {
    width: '65%',
    height: 250
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  }
});

export default CustomFilterComponent;