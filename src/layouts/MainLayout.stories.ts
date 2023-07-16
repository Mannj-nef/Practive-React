import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { MainLayout } from '~/layouts';

const meta = {
  title: 'Space:neo/main layout',
  component: MainLayout,
  decorators: [withRouter],
  tags: ['autodocs']
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const mainLayout: Story = {};
