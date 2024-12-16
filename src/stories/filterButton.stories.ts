import { Meta, StoryObj } from '@storybook/react/*';

import FilterButton from 'components/commons/button/filterButton';

const meta = {
  title: 'Common_Component/FilterButton',
  component: FilterButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalFilterButton: Story = {
  args: {
    label: 'Premier League',
  },
};
