import React from 'react';
import RNPicker from 'react-native-picker-select';
import type {PropsWithChildren} from 'react';
import type {TextStyle as RNTextStyle} from 'react-native';
import type {
  PickerSelectProps as RNPickerProps,
  PickerStyle as RNPickerStyle,
} from 'react-native-picker-select';

const inputStyle: RNTextStyle = {
  paddingHorizontal: 8,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#000',
  borderRadius: 4,
  color: '#000',
};

const rootStyle: RNPickerStyle = {
  inputIOS: inputStyle,
  inputAndroid: inputStyle,
};

const _Picker = (props: PropsWithChildren<RNPickerProps>) => (
  <RNPicker useNativeAndroidPickerStyle={false} style={rootStyle} {...props}>
    {props.children}
  </RNPicker>
);

export const Picker = _Picker;
