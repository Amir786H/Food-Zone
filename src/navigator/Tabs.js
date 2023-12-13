import React from 'react';
import {Image, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import { Home } from "../src/screens/";

import {icons, COLORS} from '../../constants';
import RestaurantList from '../screen/RestaurantList';
import Cart from '../screen/Cart';
import Dashboard from '../screen/Dashboard';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case 'RestaurantList':
              return (
                <View>
                  <Image
                    source={icons.home}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 25,
                      height: 25,
                    }}
                  />
                </View>
              );
            case 'Dashboard':
              return (
                <View>
                  <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 25,
                      height: 25,
                    }}
                  />
                </View>
              );
            case 'Cart':
              return (
                <View>
                  <Image
                    source={icons.eat}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 25,
                      height: 25,
                    }}
                  />
                </View>
              );
            // case 'Account':
            //   return (
            //     <Image
            //       source={icons.user}
            //       resizeMode="contain"
            //       style={{
            //         tintColor: tintColor,
            //         width: 25,
            //         height: 25,
            //       }}
            //     />
            //   );
          }
        },
      })}>
      <Tab.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: true, title: 'Explore Food'}}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: true, title: 'Checkout'}}
      />
      {/* <Tab.Screen name="Account" component={RestaurantList} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
