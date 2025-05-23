"use client";

import { NowPlayingResponse } from "@/types/Spotify";
import { useEffect, useState } from "react";

interface UseNowPlayingReturn {
  result: NowPlayingResponse | null;
  isNull: boolean;
  isLoading: boolean;
  isPlaying: boolean;
}

export const useNowPlaying = (): UseNowPlayingReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNull, setIsNull] = useState(false);
  const [result, setResult] = useState<NowPlayingResponse | null>(null);

  const fetchNowPlaying = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/now-playing"); // fetch from internal handler api
      const value: NowPlayingResponse = await response.json();
      if (!value.isPlaying) {
        setIsPlaying(false);
      } else if (value.songUrl === undefined && value.isPlaying) {
        // playing podcast episode won't return item but isPlaying will be true
        setIsPlaying(true);
        setIsNull(true);
      } else {
        setResult(value);
        setIsPlaying(value.isPlaying);
        setIsNull(false);
      }
    } catch (error) {
      console.error("Error fetching now playing data:", error);
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const intervalId = setInterval(fetchNowPlaying, 45000);
    return () => clearInterval(intervalId);
  }, []);

  return { result, isNull, isLoading, isPlaying };
};
