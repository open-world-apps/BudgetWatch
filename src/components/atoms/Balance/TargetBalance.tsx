import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';

import { useAppSelector } from '../../../redux/app/hooks';

import { Digit, DigitContainer } from '../styles/atomicStyles';

const TargetBalance = (): JSX.Element => {
  const targetBalance = useAppSelector(state => state.balance.targetBalance);

  return <DigitContainer />;
};

export default TargetBalance;
