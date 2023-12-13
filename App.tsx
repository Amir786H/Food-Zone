import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SharedElementNavigator from './src/navigator/SharedElementNavigator';
import {Provider, useDispatch} from 'react-redux';
import {mystore} from './src/newredux/MyStore';
import {addMyProduct} from './src/newredux/MyProductSlice';
import Main from './src/screen/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   items.map(item => {
  //     dispatch(addMyProduct(item));
  //   });
  // }, []);

  return (
    <Provider store={mystore}>
      {/* <SharedElementNavigator /> */}
      <Main />
    </Provider>
  );
}
