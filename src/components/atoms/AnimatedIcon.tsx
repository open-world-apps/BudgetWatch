import React, { ReactElement, useRef } from 'react';
import { Animated } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const AnimatedIcon = (): ReactElement => {
  const rotAnim = useRef(new Animated.Value(0)).current;

  const rotateOpen = () => {
    Animated.timing(rotAnim, {
      toValue: 180,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const rotateClose = () => {
    Animated.timing(rotAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Svg height="20" width="20">
      <Line x1="0" y1="0" x2="20" y2="20" stroke="blue" strokeWidth="2" />
    </Svg>
  );
};

export default AnimatedIcon;
