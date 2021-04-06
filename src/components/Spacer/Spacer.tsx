import React from 'react';
import {View as RNView} from 'react-native';
import {spacing} from '../../theme';

import type {ViewStyle as RNViewStyle} from 'react-native';

type Props = {
  horizontal?: number;
  vertical?: number;
};

export const Spacer = (props: Props) => {
  let style: RNViewStyle = {};

  if (props.horizontal) {
    style.marginHorizontal = spacing[props.horizontal] || props.horizontal;
  }

  if (props.vertical) {
    style.marginVertical = spacing[props.vertical] || props.vertical;
  }

  return <RNView style={style} />;
};
