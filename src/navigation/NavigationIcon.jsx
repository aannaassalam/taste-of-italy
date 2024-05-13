import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icons} from '../themes/ImagePath';
import normalize from '../utils/helpers/dimen';

export default function NavigationIcon({route, isFocused}) {
  const getIcon = () => {
    switch (route) {
      case 'Home':
        return (
          <Image
            source={Icons.home}
            tintColor={isFocused ? '#f0f0f0' : '#333'}
            style={styles.icon}
          />
        );
      case 'Dine In':
        return (
          <Image
            source={Icons.dine_in}
            tintColor={isFocused ? '#f0f0f0' : '#333'}
            style={styles.icon}
          />
        );
      case 'Take Away':
        return (
          <Image
            source={Icons.takeaway}
            tintColor={isFocused ? '#f0f0f0' : '#333'}
            style={styles.icon}
          />
        );
      case 'Location':
        return (
          <Image
            source={Icons.location}
            tintColor={isFocused ? '#f0f0f0' : '#333'}
            style={styles.icon}
          />
        );
      case 'Account':
        return (
          <Image
            source={Icons.user}
            tintColor={isFocused ? '#f0f0f0' : '#333'}
            style={styles.icon}
          />
        );
    }
  };

  return (
    // <View style={{width: normalize(20), height: normalize(20)}}>
    getIcon()
    // </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: normalize(18),
    aspectRatio: 1,
    height: normalize(18),
    marginRight: normalize(5),
    // resizeMode: 'cover',
    // flex: 1,
  },
});
