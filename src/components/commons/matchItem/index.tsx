interface MatchItemProps {
  /** 경기하는 팀을 홈팀과 어웨이팀으로 전달합니다. */
  team: {
    home: string;
    away: string;
  };
  /** 날짜는 문자열로 전달합니다. */
  date: string;
  /** 시간을 문자열로 전달합니다.*/
  time: string;
}

function MatchItem({ team, date, time }: MatchItemProps) {
  return (
    <div className="flex gap-4 px-16 py-4 rounded-xl bg-neutral-200">
      <div className="flex gap-3 items-center">
        <div className="font-semibold text-lg">{team.home}</div>
        <div className="size-12 bg-blue-200 rounded-full"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-lg text-yellow-500">{time}</div>
        <div className="font-bold text-xs text-slate-400">{date}</div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="size-12 bg-blue-200 rounded-full"></div>
        <div className="font-semibold text-lg">{team.away}</div>
      </div>
    </div>
  );
}

export default MatchItem;
