import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {SharedElementStackParamList} from '../navigator/SharedElementNavigator';
import {images} from '../../constants';
import CuisineScreen from '../components/CuisineScreen';

type DashboardScreenRouteProp = RouteProp<
  SharedElementStackParamList,
  'Dashboard'
>;

type Props = {
  route: DashboardScreenRouteProp;
  width: any;
};

const Dashboard = ({route}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();

  const {width} = useWindowDimensions();

  return (
    <ImageBackground style={styles.container} source={images.image_background}>
      <View style={{alignSelf: 'flex-start', paddingHorizontal: 35}}>
        <Text style={{fontFamily: 'italic', fontSize: 20, color: 'orange'}}>
          Explore Various Cuisine's
        </Text>
      </View>
      <View style={styles.childView}>
        <CuisineScreen
          source={require('../assets/IndianCuisine.jpg')}
          cuisineName={'Indian Cuisine'}
        />
        <CuisineScreen
          source={require('../assets/ItalianCuisine.jpg')}
          cuisineName={'Italian Cuisine'}
        />
        <CuisineScreen
          source={require('../assets/mexicancuisine.jpg')}
          cuisineName={'Mexican Cuisine'}
        />
      </View>
      <View style={styles.childView}>
        <CuisineScreen
          source={require('../assets/latinCuisine.jpg')}
          cuisineName={'Latin Cuisine'}
        />
        <CuisineScreen
          source={require('../assets/american.jpg')}
          cuisineName={'American Cuisine'}
        />
        <CuisineScreen
          source={require('../assets/turkish.jpg')}
          cuisineName={'Turkish Cuisine'}
        />
      </View>
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  textName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textLocation: {
    color: 'white',
    fontSize: 16,
  },
  textAbout: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    color: '#323232',
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: 'justify',
  },
  childView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
