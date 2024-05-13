import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../themes/ImagePath';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

const PAGE_WIDTH = Dimensions.get('screen').width;

const CustomItem = ({index, animationValue, image}) => {
  const maskStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ['#000000dd', 'transparent', '#000000dd'],
    );

    return {
      backgroundColor,
    };
  }, [animationValue]);

  return (
    <View
      style={{flex: 1, backgroundColor: '#000', justifyContent: 'flex-start'}}>
      <Image
        key={index}
        source={image}
        index={index}
        style={{
          borderRadius: 0,
          width: '100%',
          flex: 1,
          resizeMode: 'contain',
          height: 'auto',
        }}
      />
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          maskStyle,
        ]}
      />
    </View>
  );
};

export default function Home() {
  const image_array = [
    {
      image: Images.page_one,
    },
    {
      image: Images.page_two,
    },
    {
      image: Images.page_three,
    },
    {
      image: Images.page_four,
    },
    {
      image: Images.page_five,
    },
    {
      image: Images.page_six,
    },
  ];

  const animationStyle = React.useCallback(value => {
    'worklet';

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const translateX = interpolate(
      value,
      [-2, 0, 1],
      [-PAGE_WIDTH, 0, PAGE_WIDTH],
    );

    return {
      transform: [{translateX: translateX}],
      zIndex,
    };
  }, []);

  return (
    <View style={styles.container} edges={['top']}>
      {/* <Image
        source={Images.page_one}
        style={styles.image}
        resizeMethod="scale"
      /> */}
      <Carousel
        loop
        autoPlay
        autoPlayInterval={2000}
        style={{width: PAGE_WIDTH, flex: 1, alignItems: 'flex-start'}}
        width={PAGE_WIDTH}
        data={image_array}
        renderItem={({item, index, animationValue}) => {
          return (
            <CustomItem
              key={index}
              index={index}
              image={item.image}
              animationValue={animationValue}
            />
          );
        }}
        customAnimation={animationStyle}
        scrollAnimationDuration={1200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: Dimensions.get('screen').width,
    flex: 1,
    resizeMode: 'cover',
  },
});
