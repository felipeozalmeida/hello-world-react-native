import React from 'react';
import {TextInput as RNTextInput} from 'react-native';
import type {
  TextStyle as RNTextStyle,
  TextInputProps as RNTextInputProps,
} from 'react-native';

const style: RNTextStyle = {
  paddingHorizontal: 8,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#000',
  borderRadius: 4,
};

type Props = RNTextInputProps & {
  children?: React.ReactNode;
};

export const TextInput = ({children, ...rest}: Props) => {
  return (
    <RNTextInput {...rest} style={style}>
      {children}
    </RNTextInput>
  );
};
