interface MatchItemProps {
  /** 홈/어웨이 팀 이름 */
  team: {
    home: string;
    away: string;
  };
  /** 경기 날짜 */
  date: string;
  /** 경기 시간*/
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
