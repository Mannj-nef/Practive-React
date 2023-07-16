import { Meta, StoryObj } from '@storybook/react';

import Logo from '~/components/logo';
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
