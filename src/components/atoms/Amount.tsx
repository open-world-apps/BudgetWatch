import React, { ReactElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { styles } from './styles/atomicStyles';

interface Props {
  balance: number;
  style?: any;
}

const Amount = ({ balance, style }: Props): ReactElement => {
  const [cardBalance, adjustBalance] = useState<number>(0);

  useEffect(() => {
    adjustBalance(balance);
  }, [cardBalance]);

  return <Text style={style || styles.text}>{cardBalance}</Text>;
};

Amount.propTypes = {
  balance: PropTypes.number.isRequired,
  style: PropTypes.shape,
};

Amount.defaultProps = {
  style: {},
};

export default Amount;
