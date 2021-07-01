import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';

import { useAppSelector } from '../../../redux/app/hooks';

import { Digit, DigitContainer } from '../styles/atomicStyles';

const RemainingBalance = (): JSX.Element => {
  const remainingBalance = useAppSelector(
    state => state.balance.remainingBalance,
  );

  return <DigitContainer />;
};

export default RemainingBalance;
