import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const TabView = ({mapOnPress, listOnPress, tabViewStyle}) => {
  const [mapColor, setMapColor] = useState('#A1ACBD');
  const [listColor, setListColor] = useState('#2C9AF0');
  return (
    <View
      style={{
        ...tabViewStyle,
        flexDirection: 'row',
        backgroundColor: '#A1ACBD',
        borderRadius: 15,
        marginHorizontal: '15%',
        marginVertical: '3%',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={[styles.mapButtonStyle, {backgroundColor: mapColor}]}
        onPress={() => {
          setMapColor('#2C9AF0');
          setListColor('#A1ACBD');
          mapOnPress();
        }}>
        <Text style={{alignSelf: 'center', color: 'white'}}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.listButtonStle, {backgroundColor: listColor}]}
        onPress={() => {
          setMapColor('#A1ACBD');
          setListColor('#2C9AF0');
          listOnPress();
        }}>
        <Text style={{alignSelf: 'center', color: 'white'}}>List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mapButtonStyle: {
    flex: 1,
    padding: '5%',
    justifyContent: 'space-around',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
  },
  listButtonStle: {
    flex: 1,
    padding: '5%',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
export default TabView;
