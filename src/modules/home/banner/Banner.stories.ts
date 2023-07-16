import { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'modules/home/banner',
  component: Banner,
  decorators: [withRouter],
  tags: ['autodocs']
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const bannerPage: Story = {
  args: {
    bannerLaunchSubTitle:
      'Lorem ipsum text as placeholder for this section of text. To be filled in later.',
    bannerLaunchTitle:
      'Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed.'
  }
};
