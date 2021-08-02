import React, {useContext, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/contextGradient';
import {useFade} from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {color, prevColor, setPrevMainColors} = useContext(GradientContext);

  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(color);
      fadeOut();
    });
  }, [color]);
  return (
    <View style={{backgroundColor: '#333', flex: 1}}>
      <LinearGradient
        colors={[prevColor.primary, prevColor.secondary, '#FFFFFF']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      <Animated.View style={{...StyleSheet.absoluteFillObject}}>
        <LinearGradient
          colors={[color.primary, color.secondary, '#FFFFFF']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
