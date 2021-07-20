import React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import AnimatedIcon from '../../../src/components/atoms/AnimatedIcon';
const CenterView = require('../CenterView');

storiesOf('AnimatedIcon', module)
   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
   .add('with stuff', () => <AnimatedIcon />);
