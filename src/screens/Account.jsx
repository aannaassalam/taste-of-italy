import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {Linking, Alert, View, Text} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

export default function Account({navigation}) {
  const sleep = async timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const init = async () => {
    try {
      const url = 'https://bopple.app/account';
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
        navigation.navigate('Home');
        //   Alert.alert(JSON.stringify(result))
      } else {
        Linking.openURL(url);
      }
    } catch (error) {
      console.log(error.message);
      // Alert.alert(error.message)
    }
  };

  useFocusEffect(
    useCallback(() => {
      init();
    }, []),
  );

  return (
    <View>
      <Text>Redirecting...</Text>
    </View>
  );
}
