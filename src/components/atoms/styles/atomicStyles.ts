import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface Styles {
  text?: TextStyle;
  pressable?: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  text: {
    textAlign: 'center',
    fontFamily: 'Inconsolata-Bold',
    fontSize: 25,
    height: 28,
  },
});
