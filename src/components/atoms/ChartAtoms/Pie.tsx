import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Dimensions, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export interface DataSet {
   budget: string;
   balance: number;
   color: string;
}

type Props = {
   data: Array<DataSet>;
};

const Pie = ({ data }: Props): JSX.Element => {
   const [dataSet, setDataSet] = useState<Array<Object>>([]);
   const [screenWidth, setScreenWidth] = useState<number>(0);
   const [screenHeight, setScreenHeight] = useState<number>(0);
   // vertical: 0, horizontal: 1
   const [screenOrientation, setOrientation] = useState<boolean>(false);

   const screenDimensions = Dimensions.get('screen');

   useEffect(() => {
      setDataSet(data);
   }, [data]);

   useEffect(() => {
      setScreenWidth(screenDimensions.width);
   }, [screenDimensions.width]);

   useEffect(() => {
      setScreenHeight(screenDimensions.height);
   }, [screenDimensions.height]);

   useEffect(() => {
      if (screenWidth > screenHeight) setOrientation(true);
      else setOrientation(false);
   }, [screenWidth, screenHeight]);

   const chartConfig = {};

   return (
      <View>
         <PieChart
            accessor={'balance'}
            backgroundColor={'transparent'}
            chartConfig={chartConfig}
            paddingLeft={'15'}
            data={dataSet}
            hasLegend={false}
            height={!screenOrientation ? 200 : screenHeight}
            width={!screenOrientation ? screenWidth : 200}
            center={[50, 50]}
         />
      </View>
   );
};

Pie.propTypes = {
   data: PropTypes.arrayOf(PropTypes.object),
};

export default Pie;
