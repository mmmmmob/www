import getNowPlayingItem from "@/lib/spotify";
import { NextResponse } from "next/server";

// handler api call update from serer-side api code
export async function GET() {
  const result = await getNowPlayingItem({
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
  });

  if (result) {
    return NextResponse.json(result, { status: 200 });
  }

  return NextResponse.json(
    { error: "Failed to get now playing" },
    { status: 401 },
  );
}
