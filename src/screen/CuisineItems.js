import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProductToMyCart} from '../newredux/MyCartSlice';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants';

const CuisineItems = () => {
  const navigation = useNavigation();
  // Getting products from Global Store
  const myProducts = useSelector(state => state.product);
  const myCartItems = useSelector(state => state.cart);
  // console.log('################',myProducts);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    let total = 0;
    myCartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.containerView}>
        <Text style={{color: '#000', fontSize: 16, fontWeight: '700'}}>
          Menu List
        </Text>
      </View>
      <FlatList
        data={myProducts}
        renderItem={({item, index}) => {
          return (
            <View style={styles.parentListStyle}>
              <Image
                source={item.image}
                style={{width: 100, height: 100, borderRadius: 10}}
              />
              <View style={{padding: 10, alignSelf: 'flex-start'}}>
                <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                  {item.itemName}
                </Text>
                <Text style={{fontWeight: '600', color: 'green', fontSize: 16}}>
                  {'₹' + item.price}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  {item.qty == 0 ? (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                      }}
                      style={styles.commonStyle}>
                      <Text style={{color: '#fff'}}>Add Item</Text>
                    </TouchableOpacity>
                  ) : null}

                  {/* For Future Functionality */}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity style={styles.commonStyle}>
                      <Text style={{color: '#fff'}}>-</Text>
                    </TouchableOpacity>
                  )}

                  {/* For Future Functionality */}
                  {item.qty == 0 ? null : (
                    <Text
                      style={{marginLeft: 10, fontSize: 16, fontWeight: '600'}}>
                      {'0'}
                    </Text>
                  )}
                  {/* For Future Functionality */}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity style={styles.commonStyle}>
                      <Text style={{color: '#fff'}}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />

      <View style={styles.bottomView}>
        <Text style={[styles.commonTextStyle, {marginBottom: 10}]}>
          {'Total:  ' + '₹' + getTotalPrice()}
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}
          style={[styles.commonStyle, {height: 40, marginRight: 10}]}>
          <Text style={{color: '#fff'}}>Move to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CuisineItems;

const styles = StyleSheet.create({
  commonStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
  },
  commonTextStyle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '800',
    top: 10,
    color: 'gray',
  },
  bottomView: {
    height: 70,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#fff',
    elevation: 1,
  },
  parentListStyle: {
    width: '94%',
    alignSelf: 'center',
    height: 120,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
});
