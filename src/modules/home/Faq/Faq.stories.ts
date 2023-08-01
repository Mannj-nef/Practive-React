import { Meta, StoryObj } from '@storybook/react';
import Faq from '.';

import { datasMock } from '~/mockData';

const meta = {
  title: 'modules/home/faq',
  component: Faq,
  tags: ['autodocs']
} satisfies Meta<typeof Faq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const faqPage: Story = {
  args: {
    datas: datasMock
  }
};
