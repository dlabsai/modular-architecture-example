import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  label: {
    color: 'black',
    textDecorationLine: 'none',
  },
  input: {
    marginTop: 3,
  },
});

interface Props {
  label: string;
  isChecked: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: FC<Props> = ({
  label,
  onChange: handleOnChange,
  isChecked,
}) => (
  <View style={styles.container}>
    <BouncyCheckbox
      style={styles.input}
      isChecked={isChecked}
      textStyle={styles.label}
      text={label}
      onPress={handleOnChange}
    />
  </View>
);
