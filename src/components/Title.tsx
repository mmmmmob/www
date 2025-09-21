import Image from "next/image";

const Title = () => {
  return (
    <div className="mx-5 self-center md:w-8/12 md:flex-initial">
      <div className="flex">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={128}
          height={128}
          className="mr-3 size-20 self-center rounded-md max-sm:size-32"
        />
        <div className="self-center text-start">
          <h1 className="text-balances font-fkDisplay text-3xl underline underline-offset-4 max-sm:mb-3">
            Theppitak M.
          </h1>
          <p className="font-mono leading-tight font-light">
            A newcomer at the crossroad of tech and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
