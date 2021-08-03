import React, { FC, ReactElement, useState } from 'react';
import { Text } from 'react-native';

interface Props {
  label: string;
}

const Label = ({ label }: Props): ReactElement => {
  const [activeLabel, setActiveLabel] = useState<string>(label);

  return <Text>{activeLabel}</Text>;
};

export default Label;
