import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Dropdown from 'react-native-element-dropdown';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const DropdownScreen = _props => {
  const [dropdown, setDropdown] = useState(null);
  const [dropdown1, setDropdown1] = useState(null);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Dropdown
          data={data}
          labelField="label"
          valueField="value"
          label="Title"
          placeholder="Select item"
          value={dropdown}
          onChange={item => {
            setDropdown(item);
            console.log('selected', item);
          }}
        />

        <Dropdown
          style={styles.dropdown2}
          containerStyle={{
            padding: 10,
            height: 300,
          }}
          data={data}
          search
          searchPlaceholder="Search"
          labelField="label"
          valueField="value"
          label="Title"
          placeholder="Select item"
          value={dropdown1}
          onChange={item => {
            setDropdown1(item);
            console.log('selected', item);
          }}
          // renderLeftIcon={() => (
          //   <AntDesign
          //     style={styles.icon}
          //     color="black"
          //     name="Safety"
          //     size={20}
          //   />
          // )}
          textError="Error"
        />
      </View>
    </SafeAreaView>
  );
};

export default DropdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
  },
  dropdown: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
  },
  dropdown2: {
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 20,
  },
  icon: {
    marginRight: 5,
  },
});