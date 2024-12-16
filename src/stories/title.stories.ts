import { Meta, StoryObj } from '@storybook/react/*';

import Title from 'components/commons/title';

const meta = {
  title: 'Common_Component/Title',
  component: Title,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Title 컴포넌트는 영역의 제목을 표시합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { description: '해당 영역 이름', control: 'text' },
  },
  args: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTitle: Story = {
  args: {
    title: 'Live Match',
  },
};
