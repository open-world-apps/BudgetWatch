import React from 'react';
import { View } from 'react-native';

import RemainingAmount from '../molecules/RemainingAmount';

const Budget = (): JSX.Element => {
  return <RemainingAmount cat="balance" />;
};

export default Budget;
