import React from 'react';
import {View} from 'react-native';
import type {ReactNode} from 'react';
import type {ViewStyle, ViewProps} from 'react-native';
import {spacing} from '../../theme';

const rootStyles: ViewStyle = {
  marginVertical: spacing[3],
};

const buttonSpacing: ViewStyle = {
  marginTop: spacing[1],
};

type Props = ViewProps & {
  children?: ReactNode[];
};

export const ButtonContainer = (props: Props) => {
  return (
    <View {...props} style={[rootStyles, props.style]}>
      {props.children?.map((child, index) => (
        <View style={index > 0 ? buttonSpacing : {}} key={index}>
          {child}
        </View>
      ))}
    </View>
  );
};
