import { Meta, StoryObj } from '@storybook/react/*';

import ScoreBoard from 'components/commons/scoreBoard';

const meta = {
  title: 'Common_Component/ScoreBoard',
  component: ScoreBoard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ScoreBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalScoreBaord: Story = {
  args: {
    center: 'St james Park',
    week: 10,
    team: {
      home: 'Newcastle',
      away: 'Chelsea',
    },
    score: {
      home: 0,
      away: 0,
    },
    gameTime: 83,
  },
};
