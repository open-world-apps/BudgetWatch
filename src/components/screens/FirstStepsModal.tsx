import React, { ReactElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  FirstSteps: { completed: boolean };
};

type Props = NativeStackScreenProps<RootStackParamList, 'FirstSteps'>;

const FirstStepsModal = ({ navigation }: Props): ReactElement => {
  const [isInitialized, changeInitializedState] = useState<boolean>(false);
  const [lastStepComplete, markCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (!isInitialized && lastStepComplete) {
      changeInitializedState(true);
    }
    if (isInitialized) {
      navigation.goBack();
    }
  }, [lastStepComplete]);

  return <View />;
};

FirstStepsModal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default FirstStepsModal;
