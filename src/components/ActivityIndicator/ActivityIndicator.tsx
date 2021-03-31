import React from 'react';
import {ActivityIndicator as RNActivityIndicator, Platform} from 'react-native';
import type {
  ActivityIndicatorProps as RNActivityIndicatorProps,
  ColorValue,
} from 'react-native';

const color = Platform.select<ColorValue>({
  android: '#2196F3',
  ios: '#999999',
});

export type ActivityIndicatorProps = RNActivityIndicatorProps;

export const ActivityIndicator = (props: ActivityIndicatorProps) => (
  <RNActivityIndicator size="large" color={color} {...props} />
);
