import Divider from "./Divider";
export const Header = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1>
          <a
            className="text-gray-900 dark:text-yellow-200"
            href="https://foodchain1028.eth.xyz"
          >
            FOODCHAIN
          </a>
        </h1>
        <p>
          <img src="https://imgur.com/i475V0L.png" alt="ditto" />
        </p>
      </div>
      <Divider />
    </>
  );
};

export default Header;
