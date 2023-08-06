import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';

import { withRouter } from 'storybook-addon-react-router-v6';

import { linkHeaders } from '~/mockData';

const meta = {
  title: 'Space:neo/Header',
  component: Header,
  decorators: [withRouter],
  tags: ['autodocs']
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const header: Story = {
  args: {
    links: linkHeaders
  }
};
