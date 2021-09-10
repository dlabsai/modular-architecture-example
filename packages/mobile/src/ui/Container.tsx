import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Container: FC<Props> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);
