import React from 'react';
import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts, Icons} from '../themes/ImagePath';
import normalize from '../utils/helpers/dimen';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function CustomHeader({state, descriptors, navigators}) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Image source={Icons.logo} style={styles.logo} />
      <Text style={styles.text}>Taste Of Italy</Text>
      <TouchableOpacity
        style={styles.callingButton}
        onPress={() => {
          Linking.openURL('tel:094973172');
        }}>
        <Image
          source={Icons.mobile}
          style={{width: normalize(15), height: normalize(15)}}
        />
        <Text style={styles.callingButtonText}>9497 3172</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(10),
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
    paddingTop: Platform.OS === 'ios' ? normalize(0) : normalize(10),
    backgroundColor: '#000',
    elevation: 3,
  },
  logo: {
    width: normalize(28),
    height: normalize(28),
    borderRadius: 100,
  },
  text: {
    fontFamily: Fonts.Playfair_SemiBold,
    color: '#f0f0f0',
    fontSize: normalize(14),
  },
  callingButton: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
    backgroundColor: '#d6a200',
    borderRadius: normalize(5),
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: normalize(5),
  },
  callingButtonText: {
    fontSize: normalize(14),
    fontFamily: Fonts.Montserrat_Medium,
    color: '#fff',
  },
});
