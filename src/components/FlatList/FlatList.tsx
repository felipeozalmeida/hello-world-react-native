import React from 'react';
import {FlatList as RNFlatList} from 'react-native';

import type {
  FlatListProps as RNFlatListProps,
  ListRenderItem as RNListRenderItem,
} from 'react-native';

export type ListRenderItem<ItemT> = RNListRenderItem<ItemT>;

export type FlatListProps<ItemT> = RNFlatListProps<ItemT>;

export const FlatList = <ItemT,>(props: FlatListProps<ItemT>) => {
  return <RNFlatList {...props} />;
};
