import React, {Children} from 'react';
import {View} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ViewStyle, ViewProps} from 'react-native';

import {spacing} from '../../theme';

const rootStyles: ViewStyle = {
  marginVertical: spacing[3],
};

const buttonContainerStyles: ViewStyle = {
  marginTop: spacing[1],
};

type Props = PropsWithChildren<ViewProps>;

export const ButtonContainer = (props: Props) => (
  <View {...props} style={[rootStyles, props.style]}>
    {Children.map(props.children, (child, index) => (
      <View style={index > 0 ? buttonContainerStyles : {}} key={index}>
        {child}
      </View>
    ))}
  </View>
);
