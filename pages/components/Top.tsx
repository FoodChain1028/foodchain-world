export const Top = (): JSX.Element => {
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="flex justify-center items-center hover:cursor-pointer">
        <b onClick={() => handleTop()}>⬆️ Scroll Back To Top ⬆️</b>
      </div>
    </>
  );
};

export default Top;
