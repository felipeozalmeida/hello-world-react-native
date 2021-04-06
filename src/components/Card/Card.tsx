import React from 'react';
import {View as RNView} from 'react-native';
import {palette, spacing} from '../../theme';

import type {PropsWithChildren} from 'react';
import type {
  ViewProps as RNViewProps,
  ViewStyle as RNViewStyle,
} from 'react-native';

const style: RNViewStyle = {
  paddingHorizontal: spacing[3],
  paddingVertical: spacing[3],
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: palette.black,
  borderRadius: 4,
};

type Props = PropsWithChildren<RNViewProps>;

export const Card = (props: Props) => (
  <RNView style={style} {...props}>
    {props.children}
  </RNView>
);
