"use client";
import Image from "next/image";
import { useRef, useState } from "react";

type PodcastType = {
  src: string;
};

const PodcastPlayer = ({ src }: PodcastType) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // State to track current playback time

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        audioRef.current.currentTime - 10
      );
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSkipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.duration,
        audioRef.current.currentTime + 10
      );
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = Number(e.target.value);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(e.target.value) / 100;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  const srcAudio =
    process.env.NEXT_PUBLIC_BASE_URL + `/files/blog-audies/${src}`;
  return (
    <div className="podcast-player">
      <audio ref={audioRef} src={srcAudio} onTimeUpdate={handleTimeUpdate} />
      {/* agents */}
      <div className="agents-parent">
        <figure className="agent-women">
          <Image
            width={140}
            height={145}
            src="/images/blog/agent-women.png"
            alt="Real Rich Agent"
          />
        </figure>
        <figure className="agent-men">
          <Image
            width={160}
            height={135}
            src="/images/blog/agent-men.png"
            alt="Real Rich Agent"
          />
        </figure>
      </div>
      {/* content */}
      <div className="podcast-content">
        <div className="podcast-explain">
          <p>Best Social Media Content for Real Estate Agents |</p>
          <figure>
            <Image
              width={88}
              height={32}
              src="/images/blog/Real Talk.png"
              alt="Real talk realrich"
            />
          </figure>
        </div>
        <div className="podcast-player-tools">
          <div>
            <button className="podcast-play" onClick={handlePlayPause}>
              <Image
                width={10}
                height={10}
                src={
                  isPlaying ? "/images/blog/pause.svg" : "/images/blog/play.svg"
                }
                alt={isPlaying ? "pause podcast" : "play podcast"}
              />
            </button>
          </div>
          <div className="time-podcast">
            <button onClick={handleSkipBackward}>
              <Image
                width={20}
                height={20}
                src="/images/blog/prev-currenttime.svg"
                alt="prev time podcast"
              />
            </button>
            <input
              type="range"
              min="0"
              max={audioRef.current?.duration || 100}
              value={currentTime} // Bind value to currentTime state
              onChange={handleTimeChange}
            />
            <button onClick={handleSkipForward}>
              <Image
                width={20}
                height={20}
                src="/images/blog/next-currenttime.svg"
                alt="next time podcast"
              />
            </button>
          </div>
          <div className="reply-time-podcast">
            <button onClick={handleSkipBackward}>
              <Image
                width={20}
                height={20}
                src="/images/blog/reply-second-prev.svg"
                alt="Reply podcast time"
              />
            </button>
            <button onClick={handleSkipForward}>
              <Image
                width={20}
                height={20}
                src="/images/blog/reply-second-prev.svg"
                alt="Reply podcast time"
              />
            </button>
          </div>
          <div className="sound-range-podcast">
            <Image
              src="/images/blog/sound-low.svg"
              alt="Low sound"
              width={15}
              height={10}
            />
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              onChange={handleVolumeChange}
            />
            <Image
              src="/images/blog/sound-high.svg"
              alt="High sound"
              width={22}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayer;
