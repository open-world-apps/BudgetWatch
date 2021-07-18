import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface Styles {
   label: TextStyle;
   pressable?: ViewStyle;
   text: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
   text: {
      textAlign: 'center',
      fontFamily: 'Inconsolata-Bold',
      fontSize: 25,
      height: 28,
   },
   label: {
      fontSize: 13,
   },
});
