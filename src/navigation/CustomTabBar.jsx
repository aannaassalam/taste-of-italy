import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import NavigationIcon from './NavigationIcon';
import normalize from '../utils/helpers/dimen';

const getColor = screen => {
  switch (screen) {
    case 'Home':
      return '#dfd7f3';
    case 'DineIn':
      return '#ffebd9';
    case 'TakeAway':
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
    case 'DineIn':
      return '#DEAC80';
    case 'TakeAway':
      return '#D37676';
    case 'Location':
      return '#eda600';
    case 'Account':
      return '#51829B';
  }
};

const Tab = ({route, index, state, descriptors, navigation}) => {
  const [startingWidth, setStartingWidth] = useState(55);
  const [fullWidth, setFullWidth] = useState(110);
  const animatedWidth = useRef(new Animated.Value(startingWidth)).current;

  const isFocused = state.index === index;

  useEffect(() => {
    // expanded?setText(props.text): setText(props.text.substring(0, 40));
    Animated.spring(animatedWidth, {
      friction: 100,
      toValue: isFocused ? fullWidth : startingWidth,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  const onTextLayout = e => {
    let {x, y, width, height} = e.nativeEvent.layout;
    width = Math.ceil(width);
    if (width > startingWidth) {
      setFullWidth(width);
    }
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

    console.log('click');

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    // <View key={index}>
    <Pressable onPress={() => console.log('click')}>
      <Animated.View
        style={[
          styles.mainItemContainer(isFocused, label),
          {width: animatedWidth},
        ]}
        onLayout={e => onTextLayout(e)}>
        <NavigationIcon route={label} isFocused={isFocused} />
        {isFocused && (
          <Text style={styles.tab_text(isFocused, label)}>{label}</Text>
        )}
      </Animated.View>
    </Pressable>
    // </View>
  );
};

export default function CustomTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(15),
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(10),
    // gap: normalize(5),
  },
  mainItemContainer: (isFocused, label) => ({
    backgroundColor: isFocused ? getColor(label) : '#fff',
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(15),
    borderRadius: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(5),
  }),
  tab_text: (isFocused, label) => ({
    fontSize: normalize(12),
    fontWeight: '500',
    color: getTextColor(label),
  }),
});
