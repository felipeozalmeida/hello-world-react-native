import React from 'react';
import {View} from 'react-native';
import type {ViewStyle} from 'react-native';

const style: ViewStyle = {marginVertical: 16};

type Props = {
  children?: React.ReactNode;
};

export const InputContainer = ({children}: Props) => {
  return <View style={style}>{children}</View>;
};
