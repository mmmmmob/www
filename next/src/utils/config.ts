import { SpotifyRequestHeader } from "@/types/Spotify";

export const SPOTIFY_CONFIG: SpotifyRequestHeader = {
  client_id: process.env.VITE_APP_SPOTIFY_CLIENT_ID,
  client_secret: process.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
  refresh_token: process.env.VITE_APP_SPOTIFY_REFRESH_TOKEN,
};
