import {SpotifyRequestHeader} from "../types/Spotify.ts";

export const SPOTIFY_CONFIG: SpotifyRequestHeader = {
    client_id: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
    client_secret: import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
    refresh_token: import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN,
}