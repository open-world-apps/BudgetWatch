import React from 'react';
import { Text } from 'react-native';

interface Props {
   selector: number;
   style?: any;
}

import { styles } from './styles/atomicStyles';

const Amount = ({ selector, style }: Props): JSX.Element => {
   return <Text style={style ? style : styles.text}>${selector}</Text>;
};

export default Amount;
