import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import List from '../components/List';
import TabView from '../components/TabView';
import CustomMaps from '../components/CustomMaps';
import {setRegion} from '../redux/actions/regionActions';
import {getVideoList, setLoading} from '../redux/actions/videoListActions';

const Home = () => {
  const [mapHeight, setMapHeight] = useState('20%');
  const dispatch = useDispatch();
  const region = useSelector(state => state.regionReducer);
  const {loading, nextPageToken} = useSelector(state => state.videoListReducer);

  useEffect(() => {
    dispatch(getVideoList(region, nextPageToken));
  }, [dispatch]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TabView
        tabViewStyle={{position: 'absolute', top: '6%', zIndex: 9999}}
        mapOnPress={() => {
          setMapHeight('85%');
        }}
        listOnPress={() => {
          setMapHeight('20%');
        }}
      />
      <CustomMaps
        mapStyle={{height: mapHeight}}
        onRegionChangeComplete={region => {
          dispatch(setLoading(true));
          dispatch(setRegion(region));
          dispatch(getVideoList(region));
        }}
      />
      <List
        onLoadMoreVideo={() => {
          if (!loading && nextPageToken !== '' && nextPageToken !== undefined) {
            dispatch(getVideoList(region, nextPageToken));
          }
        }}
      />
    </SafeAreaView>
  );
};
export default Home;
