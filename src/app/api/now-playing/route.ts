import getNowPlayingItem from "@/lib/spotify";
import { SpotifyRequestHeader } from "@/types/Spotify";
import { NextResponse } from "next/server";

const SPOTIFY_CONFIG: SpotifyRequestHeader = {
  client_id: process.env.SPOTIFY_CLIENT_ID,
  client_secret: process.env.SPOTIFY_CLIENT_SECRET,
  refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
};

// Calls getNowPlayingItem from lib/spotify.ts to fetch current track using Spotify API tokens
// Returns currently playing Spotify track using internal API
export async function GET() {
  const { client_id, client_secret, refresh_token } = SPOTIFY_CONFIG;

  try {
    const result = await getNowPlayingItem({
      client_id,
      client_secret,
      refresh_token,
    });
    // if there's something playing ->
    if (result && typeof result !== "boolean" && result.isPlaying) {
      return NextResponse.json(result, { status: 200 });
    }
    // if nothing is playing -> send 200 but idle
    return NextResponse.json({ ...result, isPlaying: false }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get now playing", details: error },
      { status: 401 },
    );
  }
}
