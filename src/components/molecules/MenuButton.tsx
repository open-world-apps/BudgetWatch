import React, { ReactElement, useState } from 'react';

import { GestureResponderEvent, Pressable, Text, View } from 'react-native';

const MenuButton = (): ReactElement => {
  const [isOpen, openMenu] = useState<boolean>(false);

  return (
    <Pressable>
      <View />
      <View />
    </Pressable>
  );
};
