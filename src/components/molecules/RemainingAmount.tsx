import React from 'react';
import { View, Text } from 'react-native';

import Pie from '../atoms/pieChart/Pie';
import { useAppSelector } from '../../redux/app/hooks';

import styles from './styles/molecularStyles';

interface Props {
  cat: string;
}

const RemainingAmount = ({ cat }: Props) => {
  const remaining = useAppSelector(state =>
    cat === 'balance' ? state.account.balance : state.budget.balance,
  );
  const target = useAppSelector(state =>
    cat === 'balance' ? state.account.target : state.budget.target,
  );

  return <View style={styles.container} />;
};

export default RemainingAmount;
