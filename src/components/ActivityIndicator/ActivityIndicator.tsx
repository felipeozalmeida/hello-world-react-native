import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import type {ActivityIndicatorProps as RNActivityIndicatorProps} from 'react-native';

import {color as themeColor} from '../../theme';

const color = themeColor.primary;

export type ActivityIndicatorProps = RNActivityIndicatorProps;

export const ActivityIndicator = (props: ActivityIndicatorProps) => (
  <RNActivityIndicator size="large" color={color} {...props} />
);
