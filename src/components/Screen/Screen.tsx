import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

type Props = {
  scroll?: boolean;
  children?: React.ReactNode;
};

export const Screen = ({scroll, children}: Props) => {
  if (scroll) {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <ScrollView contentContainerStyle={styles.body}>{children}</ScrollView>
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.body}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 16,
  },
});
