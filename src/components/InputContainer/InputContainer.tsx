import React from 'react';
import {View} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ViewProps} from 'react-native';

export const InputContainer = (props: PropsWithChildren<ViewProps>) => (
  <View {...props}>{props.children}</View>
);
