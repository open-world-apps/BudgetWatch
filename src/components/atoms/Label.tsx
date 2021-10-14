import React, { ReactElement, useState, useEffect } from 'react';
import { Text } from 'react-native';
import { styles } from './styles/atomicStyles';

interface Props {
  label: string;
}

const Label = ({ label }: Props): ReactElement => {
  const [activeLabel, setActiveLabel] = useState<string>('');

  useEffect(() => {
    setActiveLabel(label);
  }, [label]);

  return <Text style={styles.label}>{activeLabel}</Text>;
};

export default Label;
