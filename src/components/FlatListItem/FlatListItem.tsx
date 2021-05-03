import React from 'react';
import {
  Pressable as RNPressable,
  StyleSheet as RNStyleSheet,
} from 'react-native';
import {Text} from '../Text/Text';
import {Card} from '../Card/Card';

type Props = {
  id: number;
  text: string;
  onPress: (id: Props['id']) => void;
  onDelete: (id: Props['id']) => void;
};

const styles = RNStyleSheet.create({
  root: {flexDirection: 'row'},
  text: {flexGrow: 1},
  delete: {color: 'red'},
});

export const FlatListItem = (props: Props) => (
  <RNPressable onPress={() => props.onPress(props.id)}>
    <Card style={styles.root}>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.delete} onPress={() => props.onDelete(props.id)}>
        Delete
      </Text>
    </Card>
  </RNPressable>
);
