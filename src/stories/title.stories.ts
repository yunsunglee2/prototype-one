import { Meta, StoryObj } from '@storybook/react/*';

import Title from 'components/commons/title';

const meta = {
  title: 'Common_Component/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTitle: Story = {
  args: {
    title: 'Live Match',
  },
};
