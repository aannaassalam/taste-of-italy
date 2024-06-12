/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Platform, useColorScheme} from 'react-native';

import BottomTab from './src/navigation/BottomTab';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SplashScreen as LocalSplashScreen} from './src/screens/SplashScreen';
import SplashScreen from 'react-native-splash-screen';
import {useQuery} from '@tanstack/react-query';
import {getHomeScreenContent} from './src/functions/api.functions';

const HomeContext = createContext(null);

export const useHomeContext = () => useContext(HomeContext);

function App() {
  const [loading, setLoading] = useState(true);

  const {data, isLoading} = useQuery({
    queryKey: ['toi-specials'],
    queryFn: getHomeScreenContent,
  });

  console.log(data);

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
      <HomeContext.Provider value={{homeScreenContents: data || []}}>
        <LocalSplashScreen isAppReady={!isLoading}>
          <NavigationContainer>
            <BottomTab />
          </NavigationContainer>
        </LocalSplashScreen>
      </HomeContext.Provider>
    </GestureHandlerRootView>
  );
}

export default App;
