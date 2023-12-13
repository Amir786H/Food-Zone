import {Image, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {icons, images, COLORS, SIZES, FONTS} from '../../constants';

import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';


const OnboardingScreen = ({navigation}) => (
  <Onboarding
    onDone={() => {
      navigation.navigate('Signup');
    }}
    bottomBarColor={'#EE7214'}
    onSkip={() => {
      navigation.navigate('Signup');
    }}
    pages={[
      {
        backgroundColor: '#EE7214',
        image: (
          <Icon name="shopping-cart" color={'#fff'} size={100} onPress={() => {}}></Icon>
        ),
        title: 'Welcome to Food Zone',
        subtitle: 'Enjoy the delicious food items.',
        titleStyles: {color: 'white'},
      },
      {
        backgroundColor: '#EE7214',
        image: (
            <Icon name="leaf" color={'#fff'} size={100} onPress={() => {}}></Icon>
        ),
        title: 'Welcome to Food Zone',
        subtitle: `Explore the various variety of cousines available.`,
        titleStyles: {color: 'white'},
      },
      {
        backgroundColor: '#EE7214',
        image: (
            <Icon name="truck" color={'#fff'} size={100} onPress={() => {}}></Icon>
        ),
        title: 'Fast Delivery Option.',
        subtitle: 'Free delivery is available within 10km range',
        titleStyles: {color: 'white'},
      },
    ]}
  />
);

export default OnboardingScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginVertical: 10
//     }
// })
