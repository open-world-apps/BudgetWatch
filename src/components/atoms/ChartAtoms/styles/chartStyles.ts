import { assign } from 'lodash';
import { generator, HexArray } from '../../../../utils/colors';
import { useAppSelector } from '../../../../redux/app/hooks';

interface ColorArray {
  accounts: HexArray;
  budgets: HexArray;
}

// Getting random generated colors.
const colors = (): ColorArray => {
  const accountCount = useAppSelector(state => state.balance.accounts);
  const budgetCount = useAppSelector(state => state.budget.budgets);

  return {
    accounts: generator(accountCount),
    budgets: generator(budgetCount),
  };
};

const blueGrey50 = '#ECEFF1';

const inconsolata = '"Inconsolata-Bold", "sans-serif"';
const letterSpacing = 'normal';
const fontSize = 14;
const padding = 8;

const baseProps = (colors: HexArray) => ({
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
