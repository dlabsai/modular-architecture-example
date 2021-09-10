import React, { FC } from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    paddingBottom: 5,
  },
  input: {
    marginTop: 3,
    borderWidth: 1,
    padding: 10,
  },
});

interface Props {
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

export const Input: FC<Props> = ({
  label,
  onChange: handleOnChange,
  value,
  keyboardType,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      onChangeText={handleOnChange}
      value={String(value)}
      keyboardType={keyboardType}
    />
  </View>
);
