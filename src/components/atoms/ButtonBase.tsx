import React, { useState, useEffect, ReactElement } from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

import type { Styles } from './styles/atomicStyles';

/**
 * A foundation for all buttons and to create the ability to dynamically change the button's properties
 * based on actions performed. For example, a button that opens a modal or menu can quickly be changed
 * to a button that closes the modal or menu without needing to create a new button.
 **/

export interface PressEvent {
   onPress: (event: GestureResponderEvent) => void;
   onPressIn?: (event: GestureResponderEvent) => void;
   onPressOut?: (event: GestureResponderEvent) => void;
   onLongPress?: (event: GestureResponderEvent) => void;
}

interface Props {
   delay?: number;
   disable: boolean;
   label: string;
   pressEvent: PressEvent;
   ripple: boolean;
   styles: Styles;
}

const ButtonBase = ({
   delay,
   disable,
   label,
   pressEvent,
   ripple,
   styles,
}: Props): ReactElement => {
   const [btnLabel, setLabel] = useState<string>('');

   useEffect(() => {
      labelHandler();
   }, [label]);

   function labelHandler() {
      setLabel(btnLabel);
   }

   const rippleConfig = {
      borderless: false,
      color: 'red',
   };

   return (
      <Pressable
         android_ripple={ripple ? rippleConfig : undefined}
         delayLongPress={delay}
         disabled={disable}
         onPress={pressEvent.onPress}
         onPressIn={pressEvent.onPressIn}
         onPressOut={pressEvent.onPressOut}
         onLongPress={pressEvent.onLongPress}
         style={styles.pressable}>
         <Text style={styles.label}>{btnLabel}</Text>
      </Pressable>
   );
};

ButtonBase.propTypes = {
   label: PropTypes.string.isRequired,
   pressEvent: PropTypes.shape({
      onPress: PropTypes.func.isRequired,
      onPressIn: PropTypes.func,
      onPressOut: PropTypes.func,
      onLongPress: PropTypes.func,
   }).isRequired,
};

ButtonBase.defaultProps = {
   pressEvent: {
      onPressIn: () => {},
      onPressOut: () => {},
      onLongPress: () => {},
   },
};

export default ButtonBase;
