import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface Styles {
  label?: TextStyle;
  pip?: ViewStyle;
  pressable?: ViewStyle;
  text?: TextStyle;
}

export const activePip = (active: boolean) =>
  StyleSheet.create<Styles>({
    pip: {
      color: active ? '#676464' : '#e1c7c7',
      height: 2,
      width: 3,
    },
  });

export const styles = StyleSheet.create<Styles>({
  text: {
    textAlign: 'center',
    fontFamily: 'Inconsolata-Bold',
    fontSize: 25,
    height: 28,
  },
  label: {
    fontFamily: 'Inconsolata-Bold',
    fontSize: 13,
    height: 13,
  },
});
