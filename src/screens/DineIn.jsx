import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef} from 'react';
import {
  Linking,
  Alert,
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import normalize from '../utils/helpers/dimen';

export default function DineIn({navigation}) {
  const snapPoints = ['35%'];

  const sleep = async timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const bookTable = async () => {
    try {
      const url = 'https://tasteofitaly.com.au/book-table/';
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#333333',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#333333',
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
        });
        // await sleep(800);
        navigation.navigate('Dine In');
        //   Alert.alert(JSON.stringify(result))
      } else {
        Linking.openURL(url);
      }
    } catch (error) {
      console.log(error.message);
      // Alert.alert(error.message)
    }
  };

  const orderDrink = async () => {
    try {
      const url =
        'https://bopple.app/taste-of-italy-pizzeria-e-ristorante/menu?qr&order_type=DELIVER_TABLE';
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#333333',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#333333',
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
        });
        // await sleep(800);
        navigation.navigate('Dine In');
        //   Alert.alert(JSON.stringify(result))
      } else {
        Linking.openURL(url);
      }
    } catch (error) {
      console.log(error.message);
      // Alert.alert(error.message)
    }
  };

  //   useFocusEffect(
  //     useCallback(() => {
  //       init();
  //     }, []),
  //   );

  return (
    <View style={styles.container}>
      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        detached
        bottomInset={normalize(10)}
        style={{marginHorizontal: normalize(10)}}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.heading}>Choose an Option</Text>
          <TouchableOpacity
            style={[styles.button, {marginBottom: normalize(10)}]}
            onPress={bookTable}>
            <Text style={styles.buttonText}>Book a Table</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#d6a200'}]}
            onPress={orderDrink}>
            <Text style={styles.buttonText}>Order Drinks</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
  },
  heading: {
    fontSize: normalize(16),
    color: '#333',
    marginBottom: normalize(15),
    fontWeight: '700',
  },
  button: {
    padding: normalize(15),
    width: '100%',
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: normalize(12),
    color: '#fff',
    fontWeight: '500',
  },
});
