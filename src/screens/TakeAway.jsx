import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Linking,
  Alert,
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import normalize from '../utils/helpers/dimen';
import WebView from 'react-native-webview';

const Loader = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

export default function TakeAway({navigation}) {
  const snapPoints = ['35%'];
  const [index, setIndex] = useState(0);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [headingWidth, setHeadingWidth] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      ref.current.expand();
      setUrl('');
    });
    return unsubscribe;
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      ref.current.expand();
      setUrl('');
    }, []),
  );

  return (
    <View style={styles.container}>
      {Boolean(url) && (
        <>
          <WebView
            source={{uri: url}}
            style={{
              flex: loading ? 0 : 1,
              marginBottom: normalize(5),
              backgroundColor: '#000',
            }}
            startInLoadingState
            onLoad={() => setLoading(false)}
            // injectedJavaScript={
            //   'document.getElementById("page-container").style.margin="-202px 0 0 0"; document.getElementById("top-header").style.display="none"; document.getElementById("main-header").style.display="none";'
            // }
            // onMessage={e => {}}
            renderLoading={() => null}
          />
          {loading && <Loader />}
        </>
      )}
      <BottomSheet
        index={index}
        snapPoints={snapPoints}
        ref={ref}
        detached
        bottomInset={normalize(10)}
        // enablePanDownToClose
        // onChange={index => setIndex(index)}
        style={{marginHorizontal: normalize(10)}}>
        <BottomSheetView style={styles.contentContainer}>
          <View>
            <Text
              style={styles.heading}
              onLayout={e => {
                const {width} = e.nativeEvent.layout;
                setHeadingWidth(width);
              }}>
              TAKEAWAY
            </Text>
            <View
              style={[styles.line, {width: headingWidth || normalize(65)}]}
            />
          </View>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              setUrl(
                'https://bopple.app/taste-of-italy-pizzeria-e-ristorante/menu?qr&order_type=COLLECT',
              );
              // setIndex(0);
              setLoading(true);
              ref.current.close();
            }}>
            <Text style={styles.buttonText('primary')}>PICK UP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#fff'}]}
            onPress={() => {
              setUrl(
                'https://bopple.app/taste-of-italy-pizzeria-e-ristorante/menu?qr&order_type=DELIVER_ADDRESS',
              );
              // setIndex(0);
              setLoading(true);
              ref.current.close();
            }}>
            <Text style={styles.buttonText('secondary')}>DELIVERY</Text>
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
    alignItems: 'center',
  },
  heading: {
    fontSize: normalize(14),
    color: '#333',
    fontWeight: '700',
    textAlign: 'center',
    // textDecorationLine: 'underline',
  },
  line: {
    width: normalize(65),
    height: 2,
    backgroundColor: '#333',
    marginBottom: normalize(25),
  },
  button: {
    padding: normalize(10),
    width: '100%',
    backgroundColor: '#121212',
    borderWidth: normalize(2),
    borderColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: normalize(10),
  },
  buttonText: type => ({
    fontSize: normalize(16),
    color: type === 'secondary' ? '#121212' : '#fff',
    fontWeight: '500',
  }),
});
