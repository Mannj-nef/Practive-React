import { Meta, StoryObj } from '@storybook/react';
import Thumbnail from './Thumbnail';

import { datas } from '~/mockData';

const meta = {
  title: 'modules/home/thumbnail/ thumbnail',
  component: Thumbnail,
  tags: ['autodocs']
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const thumbnailPage: Story = {
  args: {
    datas: datas
  }
};
