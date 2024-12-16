// Meta, StoryObj는 스토리북에서 스토리 구성 파일 타입을 안전하게 작성하기 위해 사용되는 타입입니다.
import { Meta, StoryObj } from '@storybook/react/*';

import ScoreBoard from 'components/commons/scoreBoard';

// meta는 컴포넌트의 메테데이터를 정의합니다.
const meta = {
  // title은 스토리북의 UI 컴포넌트를 표시하는 경로입니다.
  title: 'Common_Component/ScoreBoard',
  // component는 스토리가 렌더링할 리액트 컴포넌트를 지정합니다.
  component: ScoreBoard,
  // parameters는 스토리 렌더링 환경을 설정합니다.
  parameters: {
    // layout은 스토리북 뷰포트의 위치를 정합니다.
    layout: 'centered',
    docs: {
      description: {
        component: 'ScoreBoard 컴포넌트는 진행중인 경기 정보를 표시합니다.',
      },
    },
  },
  // autodocs를 추가해 Docs를 자동 생성 합니다.
  tags: ['autodocs'],
  //기본 프롭스 및 컨트롤을 정의합니다.
  argTypes: {
    center: { description: '경기장이름', control: 'text' },
    week: { description: '경기 주차', control: 'number' },
    team: { description: '홈/어웨이 팀 이름', control: 'object' },
    score: { description: '현재 점수', control: 'object' },
    gameTime: { description: '현재 경기 시간', control: 'number' },
  },
  // 스토리북 컴포넌트 프롭스의 기본값을 설정합니다.
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
  },
} satisfies Meta<typeof ScoreBoard>;

// 스토리북은 export default로 내보낸 객체를 기준으로 컴포넌트의 메타데이터를 읽어들입니다.
// meta는 스토리북에서 컴포넌트 문서화 및 렌더링의 기준이 됩니다.
export default meta;
// StoryObj는 스토리 객체의 타입을 정의하며, 스토리북에서 컴포넌트를 테스트하기 위해 스토리를 작성할 때 사용함.
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
