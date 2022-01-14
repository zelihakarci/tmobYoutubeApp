import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '../assets/svg/index';

const ScreenFrame = props => {
  const {children, text = '', visibleBackIcon = false} = props;
  const nav = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          padding: '4%',
          flexDirection: 'row',
        }}>
        {visibleBackIcon && (
          <TouchableOpacity
            style={{
              paddingRight: '4%',
            }}
            onPress={() => {
              nav.goBack();
            }}>
            <BackIcon width="25" height="25" />
          </TouchableOpacity>
        )}
        <Text style={{fontSize: 17, color: 'black'}}>{text}</Text>
      </View>
      {children}
    </SafeAreaView>
  );
};
export default ScreenFrame;
