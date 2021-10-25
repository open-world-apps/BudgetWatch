import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { activePip } from '../styles/atomicStyles';

interface Props {
  active: boolean;
}

const Pip = ({ active }: Props): React.ReactElement => (
  <View style={activePip(active).pip} />
);

Pip.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Pip;
