const Title = () => {
  return (
    <div className="mx-5 self-center md:w-8/12 md:flex-initial">
      <div className="flex">
        <img
          src="/avatar.jpg"
          alt="avatar"
          className="mr-3 size-20 self-center rounded-md max-sm:size-32"
        />
        <div className="self-center text-start">
          <h1 className="text-balances font-fkDisplay text-3xl underline underline-offset-4 max-sm:mb-3">
            Theppitak M.
          </h1>
          <p className="font-mono font-light leading-tight">
            A newcomer at the crossroad of tech and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
