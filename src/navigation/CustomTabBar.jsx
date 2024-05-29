import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
  Platform,
} from 'react-native';
import NavigationIcon from './NavigationIcon';
import normalize from '../utils/helpers/dimen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Fonts} from '../themes/ImagePath';

const getColor = screen => {
  switch (screen) {
    case 'Home':
      return '#dfd7f3';
    case 'Dine In':
      return '#ffebd9';
    case 'Take Away':
      return '#ffe0e0';
    case 'Location':
      return '#fbefd3';
    case 'Account':
      return '#d3f0ff';
  }
};

const getTextColor = screen => {
  switch (screen) {
    case 'Home':
      return '#5841AB';
    case 'Dine In':
      return '#DEAC80';
    case 'Take Away':
      return '#D37676';
    case 'Location':
      return '#eda600';
    case 'Account':
      return '#51829B';
  }
};

const Tab = ({route, index, state, descriptors, navigation}) => {
  const [startingWidth, setStartingWidth] = useState(normalize(35));
  const [fullWidth, setFullWidth] = useState(normalize(90));
  const animatedWidth = useRef(new Animated.Value(startingWidth)).current;
  const animatedOpacity = new Animated.Value(0);

  const isFocused = state.index === index;

  useEffect(() => {
    // expanded?setText(props.text): setText(props.text.substring(0, 40));
    Animated.spring(animatedWidth, {
      friction: 100,
      toValue: isFocused ? fullWidth : startingWidth,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 300,
        // delay: 50,
        useNativeDriver: true,
      }).start();
    });
  }, [isFocused]);

  const onTextLayout = (e, label) => {
    let {width} = e.nativeEvent.layout;
    switch (label) {
      case 'Home':
        width = normalize(95);
        break;
      case 'Dine In':
        width = normalize(103);
        break;
      case 'Takeaway':
        width = normalize(110);
        break;
      case 'Location':
        width = normalize(110);
        break;
      case 'Account':
        width = normalize(100);
        break;
      default:
        break;
    }
    setFullWidth(width);
  };

  const {options} = descriptors[route.key];
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    // <View key={index}>
    <Pressable onPress={onPress} onLayout={e => onTextLayout(e, label)}>
      <View style={styles.innerItemContainer}>
        <Animated.View
          style={[
            styles.mainItemContainer(isFocused, label),
            {
              width: animatedWidth,
              paddingVertical: normalize(8),
              paddingHorizontal: normalize(isFocused ? 15 : 8),
            },
          ]}>
          <NavigationIcon route={label} isFocused={isFocused} />
          {isFocused && (
            <Animated.Text
              style={[
                styles.tab_text(isFocused, label),
                {
                  // opacity: animatedOpacity,
                },
              ]}
              numberOfLines={1}
              ellipsizeMode="clip">
              {label}
            </Animated.Text>
          )}
        </Animated.View>
      </View>
    </Pressable>
    // </View>
  );
};

export default function CustomTabBar({state, descriptors, navigation}) {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.decorator} />
      <View style={styles.innerContainer}>
        {state.routes.map((route, index) => (
          <Tab
            key={index}
            route={route}
            index={index}
            state={state}
            descriptors={descriptors}
            navigation={navigation}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    backgroundColor: '#fff',
    position: 'relative',
    // gap: normalize(5),
  },
  decorator: {
    height: normalize(10),
    width: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  innerContainer: {
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(10),
    paddingBottom: Platform.OS === 'ios' ? normalize(0) : normalize(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: normalize(5),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#fff',
  },
  mainItemContainer: (isFocused, label) => ({
    backgroundColor: isFocused ? '#121212' : '#fff',
    borderRadius: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(5),
    overflow: 'hidden',
  }),
  innerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(5),
    // overflow: 'hidden',
    // flex: 1,
  },
  tab_text: (isFocused, label) => ({
    fontSize: normalize(12),
    fontFamily: Fonts.Montserrat_Medium,
    color: '#f0f0f0',
    marginBottom: normalize(1),
  }),
});
