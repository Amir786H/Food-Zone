import {
  View,
  Text,
  useWindowDimensions,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SharedElementStackParamList} from '../navigator/SharedElementNavigator';
import Animated, {FadeInDown} from 'react-native-reanimated';

type Props = {
  // route: CuisineScreenRouteProp;
  source: any;
  cuisineName: string;
};

//For the access of props from the parent component.
// type CuisineScreenRouteProp = RouteProp<SharedElementStackParamList, 'CuisineScreen'>;

const CuisineScreen = ({source, cuisineName}: Props) => {
  const {width} = useWindowDimensions();
  //   const {item} = route;

  //   console.log('cuisine', route);

  const navigation =
    useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('CuisineItems');
      }}>
      <View
        style={{
          width: width - 250,
          height: width - 250,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Image
          source={source}
          style={{
            width: width - 320,
            height: width - 320,
            borderRadius: 150,
            borderWidth: 1.5,
            borderColor: 'orange'
          }}
        />
        <Text style={styles.textName}>
          {cuisineName.length > 12
            ? cuisineName.slice(0, 7) + '..'
            : cuisineName}
        </Text>
      </View>
    </Pressable>
  );
};

export default CuisineScreen;

const styles = StyleSheet.create({
  textName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
