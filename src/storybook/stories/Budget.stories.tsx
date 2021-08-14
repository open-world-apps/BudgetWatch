import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

import Budget from '../../components/molecules/Budget';
import CenterView from './CenterView';

storiesOf('Budget', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Budget
      budget={{
        label: 'groceries',
        balance: 250,
      }}
      onPress={action('clicked Budget')}
    />
  ));
