import React from 'react';
import {View} from 'react-native';
import {Picker as RNPicker} from '@react-native-picker/picker';
import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';
import type {PickerProps as RNPickerProps} from '@react-native-picker/picker/typings/Picker';

const rootStyle: ViewStyle = {
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#000',
  borderRadius: 4,
};

const _Picker = (props: PropsWithChildren<RNPickerProps>) => (
  <View style={rootStyle}>
    <RNPicker {...props}>{props.children}</RNPicker>
  </View>
);

_Picker.Item = RNPicker.Item;

export const Picker = _Picker;
