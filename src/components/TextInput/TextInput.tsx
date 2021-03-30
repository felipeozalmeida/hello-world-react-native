import React from 'react';
import {TextInput as RNTextInput} from 'react-native';
import type {PropsWithChildren, Ref} from 'react';
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

type Props = PropsWithChildren<RNTextInputProps> & {
  componentRef?: Ref<RNTextInput>;
};

export const TextInput = (props: Props) => (
  <RNTextInput {...props} style={style} ref={props.componentRef}>
    {props.children}
  </RNTextInput>
);

export type TextInputRef = RNTextInput;
