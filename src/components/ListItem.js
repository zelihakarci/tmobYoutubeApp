import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

const ListItem = props => {
  const nav = useNavigation();
  const {colors} = useTheme();
  const textcolor = colors.iconColor;
  return (
    <TouchableOpacity
      style={{}}
      onPress={() => {
        nav.navigate('VideoPlayer', {
          videoId: props.videoId,
          title: props.videoTitle,
        });
      }}>
      <View style={{flexDirection: 'row', margin: 10, marginBottom: 0}}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/mqdefault.jpg`,
          }}
          style={{
            width: '45%',
            height: 100,
          }}
        />
        <View
          style={{
            paddingLeft: 7,
          }}>
          <Text
            style={{
              fontSize: 17,
              width: Dimensions.get('screen').width / 2.5,
              color: textcolor,
            }}
            ellipsizeMode="tail"
            numberOfLines={3}>
            {props.videoTitle}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: textcolor,
              width: Dimensions.get('screen').width / 2,
            }}>
            {props.channelTitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
