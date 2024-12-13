import { Meta, StoryObj } from '@storybook/react/*';

import MatchItem from 'components/commons/matchItem';

const meta = {
  title: 'CommonComponent/MatchItem',
  component: MatchItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MatchItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalMatchItem: Story = {
  args: {
    team: {
      home: 'Man City',
      away: 'Palace',
    },
    date: '30 OCT',
    time: '06:30',
  },
};
