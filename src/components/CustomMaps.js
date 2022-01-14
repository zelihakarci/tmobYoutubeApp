import React, {useState} from 'react';
import {View, StyleSheet, Platform, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
const screenWidth = Dimensions.get('screen').width;
const CustomMaps = ({mapStyle, onRegionChangeComplete}) => {
  const region = useSelector(state => state.regionReducer);
  return (
    <View style={[{...mapStyle}, styles.container]}>
      <MapView
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : null}
        style={styles.map}
        region={region}
        onRegionChangeComplete={onRegionChangeComplete}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default CustomMaps;
