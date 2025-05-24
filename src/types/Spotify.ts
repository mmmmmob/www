export type SpotifyTokenReturn = {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
};

export type SpotifyRequestHeader = {
  client_id: string | undefined;
  client_secret: string | undefined;
  refresh_token: string | undefined;
};

export type SpotifyNowPlayingResponse = {
  is_playing: boolean;
  item?: {
    album: {
      images: {
        url: string;
      }[];
    };
    artists: {
      name: string;
    }[];
    external_urls: {
      spotify: string;
    };
    name: string;
  };
};

export type NowPlayingResponse = {
  albumImageUrl: string | undefined;
  title: string | undefined;
  artist: string | undefined;
  songUrl: string | undefined;
  isPlaying: boolean;
};
