import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';
import Header from '../components/Header';
// import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {SharedElementStackParamList} from '../navigator/SharedElementNavigator';
import {COLORS} from '../../constants';

//For the access of props from the parent component.
type DetailsScreenRouteProp = RouteProp<SharedElementStackParamList, 'Detail'>;

type Props = {
  route: DetailsScreenRouteProp;
};

const Detail = ({route}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();

  const {item} = route.params;
  const {width} = useWindowDimensions();

  let imageData: any = [];

  item.items.forEach((data: any) => {
    imageData.push(data);
  });

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View>
          <Animated.Image
            sharedTransitionTag={item.name}
            source={item.image}
            style={{width: width, height: width}}
          />
          <Animated.View
            style={styles.textContainer}
            entering={FadeIn.delay(600)}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textLocation}>{item.location}</Text>
          </Animated.View>
        </View>
        <Animated.View entering={FadeInDown.delay(800)}>
          <Text style={styles.textAbout}>About</Text>
          <Text style={styles.text}>{item.about}</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(900)}>
          <Text style={styles.textAbout}>Food Items</Text>
          {/* {item.items.map((data: {itemName: string}, _index: number) => (
            <Text style={styles.dynamicText}>
              {_index + 1}. {data.itemName}
            </Text>
          ))} */}

          {/* Category Image please create this with flatlist*/}

          <FlatList
            data={imageData}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <Pressable>
                  <View style={[styles.parentViewStyle, {width: width / 2.55}]}>
                    <View style={styles.subViewStyle}>
                      <Image
                        source={item.image}
                        style={{
                          width: width - 280,
                          height: width - 280,
                          borderRadius: 150,
                          borderWidth: 4,
                          borderColor: COLORS.primary,
                        }}
                      />
                      <Text
                        numberOfLines={2}
                        style={styles.textStyle}
                        ellipsizeMode="tail">
                        {item.itemName}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </Animated.View>
      </View>
      {/* <Button /> */}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    borderRadius: 20,
  },
  textName: {
    color: 'white',
    fontSize: 32,
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
  dynamicText: {
    color: '#323232',
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: 'justify',
    marginVertical: 5,
  },
  parentViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 20,
  },
  textStyle: {
    flex: 1,
    fontWeight: '800',
    color: 'black',
    marginVertical: 5,
  },
  subViewStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
});
