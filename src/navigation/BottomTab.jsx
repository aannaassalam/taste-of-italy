/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Home from '../screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="DineIn" component={Home} />
      <Tab.Screen name="TakeAway" component={Home} />
      <Tab.Screen name="Location" component={Home} />
      <Tab.Screen name="Account" component={Home} />
    </Tab.Navigator>
  );
}
