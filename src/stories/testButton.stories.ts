import { Meta, StoryObj } from '@storybook/react';

import TestButton from 'components/commons/button/testButton';

const meta = {
  title: 'test/Button',
  component: TestButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TestButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    label: '테스트',
  },
};
