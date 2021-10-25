import React from 'react';
import { View } from 'react-native';

import { stepCounter } from '../../../utils/dataOps';
import { styles } from '../styles/molecularStyles';
import { useAppSelector } from '../../../redux/app/hooks';

import Pip from '../../atoms/FirstStepsModal/Pip';

const PipContainer = () => {
  const activeStep = useAppSelector(state => state.setup.step);

  return (
    <View style={styles.pipContainer}>
      {Array(stepCounter()).map(() => (
        <Pip active={false} />
      ))}
    </View>
  );
};

// Array(stepCounter()).map(() => <Pip style={styles.pipContainer} />);

export default PipContainer;
