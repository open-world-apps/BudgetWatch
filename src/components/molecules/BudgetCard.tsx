import React, { ReactElement } from 'react';
import { View } from 'react-native';

import Label from '../atoms/Label';
import Amount from '../atoms/Amount';
import { useAppSelector } from '../../redux/app/hooks';

const BudgetCard = (): ReactElement => {
  const activeBudget = useAppSelector(state => state.budget.activeBudget);
  const budgetAmount = useAppSelector(state => state.budget.balance);

  return (
    <View>
      <Label label={activeBudget} />
      <Amount balance={budgetAmount} />
    </View>
  );
};

export default BudgetCard;
