import { Meta, StoryObj } from '@storybook/react';

import Home from './Home';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'page/home',
  component: Home,
  decorators: [withRouter],
  tags: ['autodocs']
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const homePage: Story = {};
