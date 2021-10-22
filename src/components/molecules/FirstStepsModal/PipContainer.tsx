import React from 'react';
import { View } from 'react-native';

import { stepCounter } from '../../../utils/dataOps';
// eslint-disable-next-line import/named
import { styles } from '../styles/molecularStyles';

const PipContainer = () =>
  Array(stepCounter()).map(() => <View style={styles.pipContainer} />);

export default PipContainer;
