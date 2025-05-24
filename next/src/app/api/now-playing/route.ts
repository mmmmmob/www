import getNowPlayingItem from "@/lib/spotify";
import { SpotifyRequestHeader } from "@/types/Spotify";
import { NextResponse } from "next/server";

const SPOTIFY_CONFIG: SpotifyRequestHeader = {
  client_id: process.env.SPOTIFY_CLIENT_ID,
  client_secret: process.env.SPOTIFY_CLIENT_SECRET,
  refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
};

// handler api call update from serer-side api code
export async function GET() {
  const { client_id, client_secret, refresh_token } = SPOTIFY_CONFIG;
  const result = await getNowPlayingItem({
    client_id,
    client_secret,
    refresh_token,
  });

  if (result) {
    return NextResponse.json(result, { status: 200 });
  }

  return NextResponse.json(
    { error: "Failed to get now playing" },
    { status: 401 },
  );
}
