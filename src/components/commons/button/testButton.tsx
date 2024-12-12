interface TestButtonProps {
  label: string;
}

function TestButton({ label }: TestButtonProps) {
  return (
    <>
      <div className="w-full h-screen bg-neutral-200 flex justify-center items-center">
        <div className="container bg-red-400 flex">
          <div className="w-10 h-10 bg-blue-50"></div>
          <div className="w-10 h-10 bg-red-50"></div>
          <div className="w-10 h-10 bg-yellow-50"></div>
        </div>
      </div>
    </>
  );
}

export default TestButton;
