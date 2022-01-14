import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Loading from '../components/Loading';
import ListItem from './ListItem';

const List = ({onLoadMoreVideo}) => {
  const {loading, videoList} = useSelector(state => state.videoListReducer);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={videoList}
          renderItem={({item, i}) => {
            return (
              <ListItem
                videoId={item.id.videoId}
                videoTitle={item.snippet.title}
                channelTitle={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={(item, i) => i.toString()}
          onEndReached={onLoadMoreVideo}
          refreshing={false}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};
export default List;
