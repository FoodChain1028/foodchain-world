interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-[#dcdcaa] mb-4">{title}</h1>
      {description && (
        <div className="text-gray-500 mt-2 text-lg">/* {description} */</div>
      )}
    </div>
  );
};

export default PageHeader;
