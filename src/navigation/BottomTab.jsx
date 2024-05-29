/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Account from '../screens/Account';
import Home from '../screens/Home';
import CustomHeader from './CustomHeader';
import CustomTabBar from './CustomTabBar';
import DineIn from '../screens/DineIn';
import TakeAway from '../screens/TakeAway';
import Location from '../screens/Location';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: props => <CustomHeader {...props} />,
      }}
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={
          {
            // headerShown: false,
          }
        }
      />
      <Tab.Screen
        name="Dine In"
        component={DineIn}
        listeners={{
          tabPress: navigation => {
            // console.log(navigation, two);
            // navigation.jumpTo('Dine In', {
            //   x: 'y',
            // });
          },
        }}
      />
      <Tab.Screen name="Takeaway" component={TakeAway} />
      <Tab.Screen name="Location" component={Location} />
      {/* <Tab.Screen name="Account" component={Account} /> */}
    </Tab.Navigator>
  );
}
