import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SharedElementNavigator from '../navigator/SharedElementNavigator';
import {addMyProduct} from '../newredux/MyProductSlice';
import {useDispatch} from 'react-redux';

let items = [
  {
    id: 0,
    itemName: 'Duo Cocoa Mocha',
    image: require('../assets/DuoCocoaMocha.jpg'),
    price: 120,
    qty: 0,
  },
  {
    id: 1,
    itemName: 'Chole bhature',
    image: require('../assets/elrestro.jpg'),
    price: 150,
    qty: 0,
  },
  {
    id: 2,
    itemName: 'Dosa & Sambhar',
    image: require('../assets/LettuceWrap.jpg'),
    price: 140,
    qty: 0,
  },
  {
    id: 3,
    itemName: 'Veg Pulao',
    image: require('../assets/LettuceWrap.jpg'),
    price: 220,
    qty: 0,
  },
];

const Main = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    items.map(item => {
      dispatch(addMyProduct(item));
    });
  }, []);
  return (
    <NavigationContainer>
      <SharedElementNavigator />
    </NavigationContainer>
  );
};

export default Main;
