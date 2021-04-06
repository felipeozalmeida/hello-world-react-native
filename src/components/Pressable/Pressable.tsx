import React from 'react';
import {Pressable as RNPressable} from 'react-native';

import type {PressableProps as RNPressableProps} from 'react-native';

export type PressableProps = RNPressableProps;

export const Pressable = (props: PressableProps) => <RNPressable {...props} />;
