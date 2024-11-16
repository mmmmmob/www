import { useState, useEffect } from "react";
import getNowPlayingItem from "../apis/spotify.ts";
import { NowPlayingResponse, SpotifyRequestHeader } from "../types/Spotify.ts";

interface UseNowPlayingReturn {
    result: NowPlayingResponse | null;
    isNull: boolean;
    isLoading: boolean;
    isPlaying: boolean;
}

export const useNowPlaying = (requestHeader: SpotifyRequestHeader): UseNowPlayingReturn => {
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isNull, setIsNull] = useState(false);
    const [result, setResult] = useState<NowPlayingResponse | null>(null);

    const fetchNowPlaying = async () => {
        setIsLoading(true);
        try {
            const value = await getNowPlayingItem(requestHeader);
            if (!value) {
                setIsPlaying(false);
            } else if (value.songUrl === undefined && value.isPlaying) { // playing podcast episode won't return item but isPlaying will be true
                setIsPlaying(true)
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
    },[]);

    return {result, isNull, isLoading, isPlaying };
}