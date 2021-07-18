import { assign } from 'lodash';
import { generator, ColorArray, HexArray } from '../../../../utils/colors';
import { useAppSelector } from '../../../../redux/app/hooks';

interface Colors {
   accounts: HexArray | ColorArray;
   budgets: HexArray | ColorArray;
}

// Getting random generated colors.
const colors = (): Colors => {
   const accountCount = useAppSelector(state => state.balance.accounts);
   const budgetCount = useAppSelector(state => state.budget.budgets);

   return {
      accounts: generator(accountCount, 'hex'),
      budgets: generator(budgetCount, 'hex'),
   };
};

const blueGrey50 = '#ECEFF1';

const inconsolata = '"Inconsolata-Bold", "sans-serif"';
const letterSpacing = 'normal';
const fontSize = 14;
const padding = 8;

const baseProps = (colors: HexArray | ColorArray) => ({
   width: 450,
   height: 300,
   padding: 50,
   colorScale: colors,
});

const baseLabelStyles = {
   fontFamily: inconsolata,
   fontSize,
   letterSpacing,
   padding: 10,
   stroke: 'transparent',
   strokeWidth: 0,
};

const centeredLabels = assign({ textAnchor: 'middle' }, baseLabelStyles);

export default {
   pie: assign(
      {
         colorScale: colors,
         style: {
            data: {
               padding,
               stroke: blueGrey50,
               strokeWidth: 1,
            },
            labels: assign({}, baseLabelStyles, { padding: 20 }),
         },
      },
      baseProps(colors().budgets),
   ),
};
