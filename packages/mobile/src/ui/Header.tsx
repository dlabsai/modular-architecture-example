import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});

interface Props {
  children: string;
}

export const Header: FC<Props> = ({children}) => (
  <Text style={styles.header}>{children}</Text>
);
