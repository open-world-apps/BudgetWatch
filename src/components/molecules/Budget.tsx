import React, { ReactElement, useState, useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Label from '../atoms/Label';
import Balance from '../atoms/Balance';

interface Props {
  budget: {
    balance: number;
    label: string;
  };
  onPress: () => void;
}

const Budget = ({ budget, onPress }: Props): ReactElement => {
  const [label, changeLabel] = useState<string>('');
  const [balance, adjustBalance] = useState<number>(0);

  useEffect(() => {
    changeLabel(budget.label);
  }, [budget.label]);

  useEffect(() => {
    adjustBalance(budget.balance);
  }, [budget.balance]);

  const rippleConfig = {
    color: '#9f5b73',
    radius: 5,
  };

  return (
    <Pressable android_ripple={rippleConfig} onPress={onPress}>
      <View style={budgetStyles.container}>
        <Label label={label} />
        <Balance balance={balance} />
      </View>
    </Pressable>
  );
};

const budgetStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    elevation: 3,
    height: 40,
    shadowColor: 'black',
    width: 50,
  },
});

export default Budget;
