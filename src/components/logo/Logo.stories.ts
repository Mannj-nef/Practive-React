import { Meta, StoryObj } from '@storybook/react';

import Logo from './index';
import logoImageUrl from '~/assets/images/space-neo-logo-black.png';

const meta = {
  title: 'Space:neo/logo',
  component: Logo,
  tags: ['autodocs']
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const logo: Story = {
  args: {
    src: logoImageUrl
  }
};
