import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantList from '../screen/RestaurantList'; //Dashboard Screen
import Detail from '../screen/Detail'; //Details Screen with description from Json
import {Data} from '../data/data'; //Json data for showing the list items
// import Dashboard from '../screen/Dashboard';
import Tabs from './Tabs';
import OnboardingScreen from '../screen/OnboardingScreen';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import CuisineItems from '../screen/CuisineItems';
import {NavigationContainer} from '@react-navigation/native';

export type SharedElementStackParamList = {
  Home: undefined;
  Dashboard: {item: Data};
  Tabs: undefined;
  Signup: undefined;
  Login: undefined;
  CuisineItems: undefined;
  OnboardingScreen: undefined;
  Detail: {item: Data};
};

const SharedElementNavigator = () => {
  const Stack = createNativeStackNavigator<SharedElementStackParamList>();
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Home"
          component={RestaurantList}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="CuisineItems"
          component={CuisineItems}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
  );
};

export default SharedElementNavigator;
