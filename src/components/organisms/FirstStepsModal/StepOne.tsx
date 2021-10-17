import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  StepOne: { completed: boolean };
  StepTwo: { completed: boolean };
};

type Props = NativeStackScreenProps<RootStackParamList, 'StepOne'>;

const StepOne = ({ route, navigation }: Props): React.ReactElement => {};

export default StepOne;
