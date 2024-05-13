/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';

import BottomTab from './src/navigation/BottomTab';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SplashScreen} from './src/screens/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <GestureHandlerRootView>
      <SplashScreen isAppReady={!loading}>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </SplashScreen>
    </GestureHandlerRootView>
  );
}

export default App;
