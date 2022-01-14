import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import ScreenFrame from '../components/ScreenFrame';

const VideoPlayer = ({route}) => {
  const {videoId, title} = route.params;
  return (
    <ScreenFrame visibleBackIcon={true}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            width: '100%',
            height: 200,
          }}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: `https://www.youtube.com/embed/${videoId}`}}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            width: Dimensions.get('screen').width - 50,
            margin: 9,
          }}
          numberOfLines={2}
          ellipsizeMode="tail">
          {title}
        </Text>
        <View style={{borderBottomWidth: 1}} />
      </View>
    </ScreenFrame>
  );
};

export default VideoPlayer;
