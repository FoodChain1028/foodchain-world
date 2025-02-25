const LineNumbers = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-12 flex flex-col items-end pr-3 text-gray-500 select-none font-mono text-sm pt-20 bg-[#1e1e1e] border-r border-[#2d2d2d] overflow-hidden">
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i + 1} className="leading-6">
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default LineNumbers;
