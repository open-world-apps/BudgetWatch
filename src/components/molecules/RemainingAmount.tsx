import React from 'react';
import { View, Text } from 'react-native';

import Pie from '../atoms/ChartAtoms/Pie';
import { useAppSelector } from '../../redux/app/hooks';

import styles from './styles/molecularStyles';

interface Props {
   cat: string;
}

const RemainingAmount = ({ cat }: Props) => {
   const remaining = useAppSelector(state =>
      cat === 'balance' ? state.balance.remaining : state.budget.remaining,
   );
   const target = useAppSelector(state =>
      cat === 'balance' ? state.balance.target : state.budget.target,
   );

   return <View style={styles.container} />;
};

export default RemainingAmount;
