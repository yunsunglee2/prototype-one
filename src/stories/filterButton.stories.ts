import { Meta, StoryObj } from '@storybook/react/*';

import FilterButton from 'components/commons/button/filterButton';

const meta = {
  title: 'Common_Component/FilterButton',
  component: FilterButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FilterButton 컴포넌트는 출력되는 경기 리그를 변경합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { description: '경기 리그 이름', control: 'text' },
  },
  args: {},
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalFilterButton: Story = {
  args: {
    label: 'Premier League',
  },
};
