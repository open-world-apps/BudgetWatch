import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { KeyboardTypeOptions, TextInput } from 'react-native';

interface Input {
  keyboardType: KeyboardTypeOptions;
  onChangeText?: () => {};
  placeholder: string;
  style: Object;
  value?: any;
}

const InputBase = ({
  keyboardType,
  onChangeText,
  placeholder,
  style,
  value,
}: Input) => {
  const [fieldStyle, setStyle] = useState({});

  useEffect(() => {
    setStyle(style);
  }, [style]);

  return (
    <TextInput
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={fieldStyle}
      value={value}
    />
  );
};

InputBase.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.any,
};

InputBase.defaultProps = {
  onChangeText: () => {},
  value: '',
};

export default InputBase;
