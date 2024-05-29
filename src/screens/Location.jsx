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
  const region = {
    latitude: -32.1538017,
    longitude: 116.0071384,
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034,
  };

  const onCall = () => {
    Linking.openURL('tel:094973172');
  };

  const getDirections = () => {
    Linking.openURL(
      'https://www.google.com/maps/dir//Taste+of+Italy+Pizzeria+e+Ristorante,+8%2F50+Forrest+Rd,+Armadale+WA+6112,+Australia/@-32.1538017,116.0071384,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2a3293990ffe9171:0x9ac13e84fac29185!2m2!1d116.0075392!2d-32.1536452?entry=ttu',
    );
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
        <View style={{marginBottom: normalize(10), alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={onCall}>
            <Text style={styles.buttonText}>Call: 9497 3172</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: normalize(60), alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={getDirections}>
            <Text style={styles.buttonText}>Get Directions</Text>
          </TouchableOpacity>
        </View>
        <MapView
          style={{
            width: '100%',
            height: 400,
            // marginHorizontal: normalize(20),
          }}
          provider="google"
          region={region}
          loadingEnabled
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
          scrollEnabled={false}>
          <Marker
            coordinate={{
              latitude: -32.1536517,
              longitude: 116.0075384,
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
