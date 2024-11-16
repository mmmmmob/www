import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { SpotifyRequestHeader } from "../types/Spotify.ts";
import {useNowPlaying} from "../hooks/useNowPlaying.ts";

const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN;

const requestHeader: SpotifyRequestHeader = {
  client_id,
  client_secret,
  refresh_token,
};

export const NowPlaying = () => {
  const { isPlaying, isNull, isLoading, result } = useNowPlaying(requestHeader);
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
          <p className="w-fit self-end text-xs">
            Currently Offline
          </p>
        </div>
      )}
      {!isLoading && isPlaying && (
        <div className="min-w-screen my-2 flex h-full items-center justify-center self-center truncate">
          <div className="flex self-center max-sm:hidden">
            <p className="mr-1 flex-shrink-0 self-end font-fkDisplay text-xs">
              Now Listening to
            </p>
          </div>
            { isNull ? (<p className="font-fkDisplay text-xs">a Podcast</p>) : (<div className="flex self-center">
              <BiSolidBarChartAlt2 size={18} className="mx-1"/>
              <img
                  src={result?.albumImageUrl}
                  alt={`${result?.title} album art`}
                  className="mx-1 size-5 self-end rounded-md"
              />
              <div className="min-md:w-40 flex self-center text-xs font-bold">
              <a
                  href={result?.songUrl}
                  target="_blank"
                  className="mx-1 overflow-x-scroll text-center max-md:max-w-44"
              >
                {result?.title}
              </a>
              <p className="mx-1">•</p>
              <p className="ml-1 truncate text-center font-medium max-md:max-w-36">
                {result?.artist}
              </p>
            </div></div>)
            }
        </div>
      )}
    </div>
  );
};
