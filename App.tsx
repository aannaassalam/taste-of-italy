/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Platform, useColorScheme} from 'react-native';

import BottomTab from './src/navigation/BottomTab';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SplashScreen as LocalSplashScreen} from './src/screens/SplashScreen';
import SplashScreen from 'react-native-splash-screen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <GestureHandlerRootView>
      <LocalSplashScreen isAppReady={!loading}>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </LocalSplashScreen>
    </GestureHandlerRootView>
  );
}

export default App;
