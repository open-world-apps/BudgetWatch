import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';

import { useAppSelector } from '../../../redux/app/hooks';

import { Digit, DigitContainer } from '../styles/atomicStyles';

const RemainingBudget = (): JSX.Element => {
  const remainingBudget = useAppSelector(state => state.budget.remainingBudget);

  return <DigitContainer />;
};

export default RemainingBudget;
