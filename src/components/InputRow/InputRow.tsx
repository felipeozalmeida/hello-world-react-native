import React from 'react';
import {View} from 'react-native';
import type {ViewStyle} from 'react-native';

const style: ViewStyle = {marginBottom: 8};
const styleLast: ViewStyle = {marginBottom: 0};

type Props = {
  children?: React.ReactNode;
  last?: boolean;
};

export const InputRow = ({children, last}: Props) => {
  if (last) {
    return <View style={styleLast}>{children}</View>;
  }
  return <View style={style}>{children}</View>;
};
