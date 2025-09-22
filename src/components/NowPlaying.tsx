"use client";

import { useNowPlaying } from "@/hooks/useNowPlaying";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

export const NowPlaying = () => {
  const { isPlaying, isNull, isLoading, result } = useNowPlaying();

  return (
    <div className="flex h-8 w-screen justify-center bg-emerald-950/60 text-slate-300 shadow backdrop-blur-md">
      {isLoading && (
        <p className="w-fit self-center text-center text-xs">Loading...</p>
      )}
      {!isLoading && !isPlaying && (
        <div className="my-2 flex w-fit self-center truncate">
          <div className="self-center">
            <BiSolidBarChartAlt2 size={20} className="mx-1" />
          </div>
          <p className="w-fit self-end text-xs">Currently Offline</p>
        </div>
      )}
      {!isLoading && isPlaying && (
        <div className="my-2 flex h-full min-w-screen items-center justify-center self-center truncate">
          {isNull && (
            <div className="flex self-center sm:hidden">
              <p className="font-fkDisplay mr-1 flex-shrink-0 self-end text-xs">
                Now Listening to a Podcast
              </p>
            </div>
          )}
          <div className="flex self-center max-sm:hidden">
            <p className="font-fkDisplay mr-1 flex-shrink-0 self-end text-xs">
              Now Listening to
            </p>
          </div>
          {isNull ? (
            <p className="font-fkDisplay text-xs max-sm:hidden">a Podcast</p>
          ) : (
            <div className="flex self-center">
              <BiSolidBarChartAlt2 size={18} className="mx-1" />
              <img
                src={result?.albumImageUrl ?? "https://placecats.com/20/20"}
                alt={`${result?.title ?? "Unknown"} album art`}
                width={20}
                height={20}
                className="mx-1 size-5 self-end rounded-md"
              />
              <div className="flex self-center text-xs font-bold max-lg:max-w-96 max-md:max-w-56">
                <a
                  href={result?.songUrl}
                  target="_blank"
                  className="mx-1 overflow-x-scroll text-center"
                >
                  {result?.title}
                </a>
                <p className="mx-1">•</p>
                <p className="ml-1 text-center font-medium max-sm:truncate">
                  {result?.artist}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
