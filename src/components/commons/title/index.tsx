interface TitleProps {
  /** 타이틀로 사용할 문자를 전달합니다. */
  title: string;
}

function Title({ title }: TitleProps) {
  return <span className="font-bold text-2xl">{title}</span>;
}

export default Title;
