import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';

import { useAppSelector } from '../../../redux/app/hooks';

import { Digit, DigitContainer } from '../styles/atomicStyles';

const TargetBudget = (): JSX.Element => {
  const targetBudget = useAppSelector(state => state.budget.targetBudget);

  return <DigitContainer />;
};

export default TargetBudget;
