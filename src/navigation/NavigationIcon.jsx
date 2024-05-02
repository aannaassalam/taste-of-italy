import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Icons} from '../themes/ImagePath';
import normalize from '../utils/helpers/dimen';

export default function NavigationIcon({route, isFocused}) {
  const getIcon = () => {
    switch (route) {
      case 'Home':
        return (
          <Image
            source={Icons.home}
            tintColor={isFocused ? '#5841AB' : '#333'}
            style={styles.icon}
          />
        );
      case 'DineIn':
        return (
          <Image
            source={Icons.dine_in}
            tintColor={isFocused ? '#DEAC80' : '#333'}
            style={styles.icon}
          />
        );
      case 'TakeAway':
        return (
          <Image
            source={Icons.takeaway}
            tintColor={isFocused ? '#D37676' : '#333'}
            style={styles.icon}
          />
        );
      case 'Location':
        return (
          <Image
            source={Icons.location}
            tintColor={isFocused ? '#eda600' : '#333'}
            style={styles.icon}
          />
        );
      case 'Account':
        return (
          <Image
            source={Icons.user}
            tintColor={isFocused ? '#51829B' : '#333'}
            style={styles.icon}
          />
        );
    }
  };

  return getIcon();
}

const styles = StyleSheet.create({
  icon: {
    width: normalize(20),
    height: normalize(20),
  },
});
