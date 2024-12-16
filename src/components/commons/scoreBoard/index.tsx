interface ScoreBoardProps {
  /** 경기가 진행되는 경기장을 문자열로 내려줍니다. */
  center: string;
  /** 경기가 진행되는 주를 숫자로 내려줍니다. */
  week: number;
  /** 경기를 진행하는 팀을 홈팀과 어웨이팀으로 내려줍니다. */
  team: {
    home: string;
    away: string;
  };
  /** 점수를 숫자로 내려줍니다. */
  score: {
    home: number;
    away: number;
  };
  /** 경기 남은 시간을 숫자로 내려줍니다. */
  gameTime: number;
}

function ScoreBoard({ center, week, team, score, gameTime }: ScoreBoardProps) {
  return (
    <div className="bg-neutral-100 border-2 rounded-3xl px-10 py-4">
      {/* 경기장과 진행주  */}
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="font-medium text-lg">{center}</span>
        <span className="font-normal text-sm text-slate-400">{`${'Week' + week}`}</span>
      </div>
      {/* 팀과 스코어 */}
      <div className="flex gap-7">
        <div className="w-20 flex flex-col justify-center items-center">
          <div className="w-16 h-16 bg-blue-300"></div>
          <span className="font-medium text-lg">{team.home}</span>
          <span className="font-normal text-sm text-slate-400">{'Home'}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="mt-3 font-semibold text-2xl">
            {score.home} : {score.away}
          </span>
          <div className="border-2 border-red-400 rounded-lg bg-red-200 font-normal text-xs text-red-400 mx-auto">
            <span className="mx-1 my-1">{`${gameTime + '`'} `}</span>
          </div>
        </div>
        <div className="w-20 flex flex-col justify-center items-center">
          <div className="w-16 h-16 bg-blue-300"></div>
          <span className="font-medium text-lg">{team.away}</span>
          <span className="font-normal text-sm text-slate-400">{'Away'}</span>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
