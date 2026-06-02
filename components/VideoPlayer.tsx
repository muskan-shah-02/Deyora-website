"use client";
import { useEffect, useRef, useState } from "react";

type Props = { src: string; watermark?: string; title?: string };

export default function VideoPlayer({ src, watermark = "DOKYDOC", title = "Product Demo" }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progressPct, setProgressPct] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const onTime = () => {
      setCurrentTime(v.currentTime);
      setProgressPct((v.currentTime / (v.duration || 1)) * 100);
    };
    const onMeta = () => setDuration(v.duration);
    const onEnded = () => {
      setPlaying(false);
      v.currentTime = 0;
    };
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = video.current;
    const bar = progress.current;
    if (!v || !bar) return;
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    v.currentTime = (x / rect.width) * v.duration;
  };

  const toggleMute = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleFs = () => {
    if (!document.fullscreenElement) wrap.current?.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  return (
    <div
      ref={wrap}
      onClick={(e) => {
        if (playing && !(e.target as HTMLElement).closest(".controls")) toggle();
      }}
      className="relative mx-auto mb-20 aspect-video w-full max-w-[960px] cursor-pointer overflow-hidden bg-bg-card border border-subtle flex items-center justify-center"
    >
      <video
        ref={video}
        playsInline
        muted={muted}
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${playing ? "opacity-100" : "opacity-0"}`}
      >
        <source src={src} type="video/mp4" />
      </video>

      <span
        className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 display text-[150px] text-white whitespace-nowrap tracking-[0.05em] transition-opacity ${
          playing ? "opacity-0" : "opacity-[0.03]"
        }`}
      >
        {watermark}
      </span>

      {!playing && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          aria-label="Play"
          className="relative z-10 w-20 h-20 rounded-full border-2 border-white flex items-center justify-center transition-colors hover:bg-white group"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white group-hover:fill-black ml-1">
            <polygon points="6,3 20,12 6,21" />
          </svg>
        </button>
      )}

      {!playing && (
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
          <span className="label-mono">{title}</span>
          <span className="font-mono text-[11px] text-ink-tertiary">{duration ? fmt(duration) : "--:--"}</span>
        </div>
      )}

      <div
        className={`controls absolute bottom-0 left-0 w-full px-6 py-4 bg-black/70 backdrop-blur-md border-t border-white/10 flex items-center gap-3 z-20 transition-opacity ${
          playing ? "opacity-0 hover:opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button onClick={(e) => { e.stopPropagation(); toggle(); }} className="p-2" aria-label="Play/Pause">
          {playing ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <polygon points="6,3 20,12 6,21" />
            </svg>
          )}
        </button>

        <div ref={progress} onClick={(e) => { e.stopPropagation(); seek(e); }} className="flex-1 h-1 bg-white/15 cursor-pointer relative">
          <div className="h-full bg-white" style={{ width: `${progressPct}%` }} />
        </div>

        <span className="font-mono text-[11px] text-ink-secondary">
          {fmt(currentTime)} / {fmt(duration)}
        </span>

        <button onClick={(e) => { e.stopPropagation(); toggleMute(); }} className="p-2" aria-label="Mute">
          {muted ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>

        <button onClick={(e) => { e.stopPropagation(); toggleFs(); }} className="p-2" aria-label="Fullscreen">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
