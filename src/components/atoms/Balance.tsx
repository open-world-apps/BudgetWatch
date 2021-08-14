import React, { ReactElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { styles } from './styles/atomicStyles';

interface Props {
  balance: number;
  style?: any;
}

const Balance = ({ balance }: Props): ReactElement => {
  const [cardBalance, adjustBalance] = useState<number>(0);

  useEffect(() => {
    adjustBalance(balance);
  }, [balance]);

  return <Text style={styles.text}>{cardBalance}</Text>;
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  style: PropTypes.shape,
};

Balance.defaultProps = {
  style: {},
};

export default Balance;
