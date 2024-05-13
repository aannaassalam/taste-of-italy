import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import {Fonts, Icons, Images} from '../themes/ImagePath';
import normalize from '../utils/helpers/dimen';

export const SplashScreen = ({isAppReady, children}) => {
  return (
    <>
      {isAppReady && children}

      <Splash isAppReady={isAppReady} />
    </>
  );
};

const LOADING_IMAGE = 'Loading image';
const FADE_IN_IMAGE = 'Fade in image';
const WAIT_FOR_APP_TO_BE_READY = 'Wait for app to be ready';
const FADE_OUT = 'Fade out';
const HIDDEN = 'Hidden';

export default function Splash({isAppReady}) {
  const [state, setState] = useState(LOADING_IMAGE);

  //   const storage = new MMKV();
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (state === FADE_IN_IMAGE) {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 500, // Fade out duration
        delay: 50, // Minimum time the logo will stay visible
        useNativeDriver: true,
      }).start(() => {
        setState(WAIT_FOR_APP_TO_BE_READY);
      });
    }
  }, [state]);

  useEffect(() => {
    if (state === WAIT_FOR_APP_TO_BE_READY) {
      if (isAppReady) {
        setState(FADE_OUT);
      }
    }
  }, [isAppReady, state]);

  useEffect(() => {
    if (state === FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 1000, // Fade out duration
        delay: 500, // Minimum time the logo will stay visible
        useNativeDriver: true,
      }).start(() => {
        setState(HIDDEN);
      });
    }
  }, [containerOpacity, state]);

  if (state === HIDDEN) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, {opacity: containerOpacity}]}>
      <Animated.Image
        source={Icons.logo}
        fadeDuration={0}
        onLoad={() => {
          setState(FADE_IN_IMAGE);
        }}
        style={[
          styles.image,
          {
            opacity: imageOpacity,
          },
        ]}
      />
      <Animated.Text style={styles.heading}>Taste of Italy</Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(20),
    position: 'absolute',
    top: 0,
    zIndex: 9999,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  image: {
    width: normalize(120),
    height: normalize(120),
    resizeMode: 'contain',
  },
  heading: {
    fontFamily: Fonts.Playfair_Bold,
    color: '#f0f0f0',
    fontSize: normalize(20),
  },
});
