import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
  Platform,
} from 'react-native';
import normalize from '../utils/helpers/dimen';
import {Fonts} from '../themes/ImagePath';
import MapView, {Marker} from 'react-native-maps';

export default function Location() {
  const onCall = () => {
    Linking.openURL('tel:094973172');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: normalize(40),
        }}>
        <Text style={styles.heading}>Our Hours:</Text>
        <View style={{marginBottom: normalize(20), alignItems: 'center'}}>
          <Text style={[styles.subheading, {marginBottom: normalize(15)}]}>
            Mon
          </Text>
          <Text style={styles.subtitle}>We are closed</Text>
        </View>
        <View style={{marginBottom: normalize(20), alignItems: 'center'}}>
          <Text style={[styles.subheading, {marginBottom: normalize(15)}]}>
            TUE - THU
          </Text>
          <View style={styles.row}>
            <Text style={styles.subheading}>Takeaway</Text>
            <Text style={styles.subtitle}>4:00pm - 9:00pm</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subheading}>Dine-In</Text>
            <Text style={styles.subtitle}>4:00pm - 9:00pm</Text>
          </View>
        </View>
        <View style={{marginBottom: normalize(20), alignItems: 'center'}}>
          <Text style={[styles.subheading, {marginBottom: normalize(15)}]}>
            FRI
          </Text>
          <View style={styles.row}>
            <Text style={styles.subheading}>Takeaway</Text>
            <Text style={styles.subtitle}>11:00am - 9:00pm</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subheading}>Dine-In</Text>
            <Text style={styles.subtitle}>12:00pm - 9:00pm</Text>
          </View>
        </View>
        <View style={{marginBottom: normalize(30), alignItems: 'center'}}>
          <Text style={[styles.subheading, {marginBottom: normalize(10)}]}>
            SAT - SUN
          </Text>
          <View style={styles.row}>
            <Text style={styles.subheading}>Takeaway</Text>
            <Text style={styles.subtitle}>4:00pm - 9:00pm</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subheading}>Dine-In</Text>
            <Text style={styles.subtitle}>5:00pm - 9:00pm</Text>
          </View>
        </View>
        <View style={{marginBottom: normalize(60), alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={onCall}>
            <Text style={styles.buttonText}>Call: 9497 3172</Text>
          </TouchableOpacity>
        </View>
        <MapView
          style={{
            width: '100%',
            height: 400,
            // marginHorizontal: normalize(20),
          }}
          provider="google"
          region={{
            latitude: -32.1446029784763,
            longitude: 116.00788250833857,
            latitudeDelta: 0.025,
            longitudeDelta: 0.0,
          }}
          loadingEnabled
          // loadingIndicatorColor="#666666"
          // loadingBackgroundColor="#eeeeee"
        >
          <Marker
            coordinate={{
              latitude: -32.1446029784763,
              longitude: 116.00788250833857,
            }}
            title="Taste of Italy"
          />
        </MapView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingBottom: normalize(5),
    // paddingVertical: normalize(40),
  },
  heading: {
    fontSize: normalize(18),
    textAlign: 'center',
    color: '#fff',
    marginBottom: normalize(60),
    fontFamily: Fonts.Playfair_Medium,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(10),
    marginBottom: normalize(5),
  },
  subheading: {
    fontSize: normalize(12),
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.Montserrat_SemiBold,
  },
  subtitle: {
    color: '#fff',
    fontSize: normalize(10),
    textAlign: 'center',
    fontFamily: Fonts.Montserrat_Regular,
  },
  button: {
    backgroundColor: '#d6a200',
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(12),
    borderRadius: normalize(5),
  },
  buttonText: {
    fontSize: normalize(12),
    color: '#f0f0f0',
    fontFamily: Fonts.Montserrat_Medium,
  },
});