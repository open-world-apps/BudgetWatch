import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';

interface Props {
  children?: any;
}

const CenterView = ({ children }: Props) => (
  // @ts-ignore
  <View style={style.main}>{children}</View>
);

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};

export default CenterView;
