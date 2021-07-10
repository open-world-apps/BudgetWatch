import React from 'react';

import { View } from 'react-native';
import { VictoryPie } from 'victory-native';

const Pie = (): JSX.Element => {
   return (
      <View>
         <VictoryPie
            data={[
               { x: 'Groceries', y: 30 },
               { x: 'Bills', y: 100 },
               { x: 'Entertainment', y: 50 },
            ]}
         />
      </View>
   );
};

export default Pie;
