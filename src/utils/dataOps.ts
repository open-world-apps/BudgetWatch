import { generator } from './colors';
import { useAppSelector } from '../redux/app/hooks';
import type { DataSet } from '../components/atoms/ChartAtoms/Pie';

interface Parameters {
   balance: number;
   budget: string;
   color?: string;
}

const createDataSet = (data: Parameters) => {
   const count = useAppSelector(state => state.budget.budgets);
   const colors = generator(count);
   const dataArr = new Array(count);

   return dataArr.map((el, i) => {
      el = {
         balance: data.balance,
         budget: data.budget,
         color: colors[i],
      };
   });
};
