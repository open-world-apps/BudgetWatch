import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface Styles {
  container: ViewStyle;
  text: TextStyle;
  pipContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    height: 28,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Inconsolata-Bold',
    height: 24,
    lineHeight: 20,
    textAlign: 'center',
  },
  pipContainer: {},
});
