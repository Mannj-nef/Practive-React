import { Meta, StoryObj } from '@storybook/react';
import ThumbnailItem from './Item';

import { datas } from '~/mockData';

const meta = {
  title: 'modules/home/thumbnail/thumbnail item',
  component: ThumbnailItem,
  tags: ['autodocs']
} satisfies Meta<typeof ThumbnailItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const thumbnailItem: Story = {
  args: {
    date: datas[0].date,
    desc: datas[0].desc,
    imgUrl: datas[0].imgUrl,
    title: datas[0].title
  }
};
