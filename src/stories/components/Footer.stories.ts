import { Meta, StoryObj } from '@storybook/react';
import Footer from '~/components/common/footer/Footer';

import { withRouter } from 'storybook-addon-react-router-v6';

import { linkFooters } from '~/mockData';

const meta = {
  title: 'Space:neo/Footer',
  component: Footer,
  decorators: [withRouter],
  tags: ['autodocs']
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const footer: Story = {
  args: {
    links: linkFooters
  }
};
