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
import {
  addProductToMyCart,
  deleteMyCartItem,
  removeMyCartItem,
} from '../newredux/MyCartSlice';
import { COLORS } from '../../constants';

const Cart = () => {
  const myCartItems = useSelector(state => state.cart);
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
      <FlatList
        data={myCartItems}
        renderItem={({item, index}) => {
          return (
            <View style={styles.childView}>
              <Image
                source={item.image}
                style={styles.imageStyle}
              />
              <View style={{padding: 10, alignSelf: 'flex-start'}}>
                <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                  {item.itemName}
                </Text>
                <Text style={{fontWeight: '600', color: 'green', fontSize: 16}}>
                  {'₹' + item.price}
                </Text>
                <View
                  style={styles.plusMinusViewStyle}>
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={styles.commonButtonStyle}
                      onPress={() => {
                        if (item.qty > 1) {
                          dispatch(removeMyCartItem(item));
                        } else {
                          dispatch(deleteMyCartItem(item.id));
                        }
                      }}>
                      <Text style={{color: '#fff'}}>-</Text>
                    </TouchableOpacity>
                  )}

                  {item.qty == 0 ? null : (
                    <Text
                      style={{marginLeft: 10, fontSize: 16, fontWeight: '600'}}>
                      {item.qty}
                    </Text>
                  )}

                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={styles.commonButtonStyle}
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                      }}>
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
          style={[styles.commonButtonStyle, {height: 40, marginRight: 10}]}>
          <Text style={{color: '#fff'}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  commonButtonStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
  },
  childView: {
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
  bottomView: {
    height: 70,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  commonTextStyle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '800',
    top: 10,
    color: 'gray'
  },
  imageStyle: {
    width: 100, height: 100, borderRadius: 10
  },
  plusMinusViewStyle: {
    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
  }
});
