import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';

import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import { decrementByAmount, incrementByAmount } from "../../redux/reducers/balanceSlice";

const Container = styled.View`
`

const BalanceCounter = (): JSX.Element => {
   const balance = useAppSelector(state => {
      return {
         remaining: state.balance.remainingBalance,
         target: state.balance.targetBalance,
      }
   });
   const dispatch = useAppDispatch();

   return <Container />;
};

export default BalanceCounter;
