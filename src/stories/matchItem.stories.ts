import { Meta, StoryObj } from '@storybook/react/*';

import MatchItem from 'components/commons/matchItem';

const meta = {
  title: 'Common_Component/MatchItem',
  component: MatchItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MatchItem 컴포넌트는 진행 예정인 경기 정보를 표시합니다.',
      },
    },
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
