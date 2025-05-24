import querystring from "querystring";
import {
  NowPlayingResponse,
  SpotifyNowPlayingResponse,
  SpotifyRequestHeader,
  SpotifyTokenReturn,
} from "../types/Spotify.js";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

// Helper function to create personal Access Token
const getAccessToken = async (
  identValue: SpotifyRequestHeader,
): Promise<SpotifyTokenReturn> => {
  const basic = Buffer.from(
    `${identValue.client_id}:${identValue.client_secret}`,
  ).toString("base64");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: identValue.refresh_token,
    }),
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch access token: ${response.statusText}`);
  }
  return response.json();
};

// Helper function to fetch raw currently playing data from Spotify API => using getAccessToken()
export const getNowPlaying = async (
  requestHeader: SpotifyRequestHeader,
): Promise<SpotifyNowPlayingResponse> => {
  const { access_token } = await getAccessToken(requestHeader);
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch now playing: ${response.statusText}`);
  } else if (response.status === 204) {
    return {
      is_playing: false,
    };
  }
  return response.json();
};

// Helper function to transform raw api response to our usable data
export const transformSpotifyResponse = (
  song: SpotifyNowPlayingResponse,
): NowPlayingResponse => {
  return {
    albumImageUrl: song.item?.album.images[0]?.url,
    artist: song.item?.artists.map((artist) => artist.name).join(", "),
    isPlaying: song.is_playing,
    songUrl: song.item?.external_urls.spotify,
    title: song.item?.name,
  };
};

// Full fetch function to be using in NowPlaying component
export default async function getNowPlayingItem(
  requestHeader: SpotifyRequestHeader,
): Promise<NowPlayingResponse | false> {
  try {
    const response = await getNowPlaying(requestHeader);
    // Retrieve raw data as its type then clean data as return type
    if (response) {
      return transformSpotifyResponse(response);
    }
    return transformSpotifyResponse({
      is_playing: false,
      item: {
        album: { images: [{ url: "" }] },
        artists: [{ name: "" }],
        external_urls: { spotify: "" },
        name: "",
      },
    } as SpotifyNowPlayingResponse);
  } catch (error) {
    console.error("Error fetching now playing item:", error);
    return false;
  }
}
