"use client";

import { Play, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { ReactElement } from "react";
import { classNames } from "@/lib/format";

export function HeroVideo(): ReactElement {
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    if (!media.matches) return;

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(() => setReady(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(() => setReady(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showPlayer) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showPlayer]);

  function openPlayer(): void {
    setShowPlayer(true);
    setPlaying(false);
    dialogRef.current?.showModal();
  }

  return (
    <>
      {ready && !showPlayer ? (
        <video
          className={classNames("absolute inset-0 hidden h-full w-full object-cover object-center transition-opacity duration-700 md:block motion-reduce:hidden", playing ? "opacity-100" : "opacity-0")}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          onError={() => setReady(false)}
        >
          <source src="/goldenbagels/hero/header-video.mp4" type="video/mp4" media="(min-width: 768px) and (prefers-reduced-motion: no-preference)" />
        </video>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-5 z-20 mx-auto flex max-w-7xl justify-end px-5 sm:bottom-10 sm:top-auto sm:px-6 lg:bottom-12 lg:px-8">
        <button
          type="button"
          aria-haspopup="dialog"
          aria-controls={dialogId}
          onClick={openPlayer}
          className="pointer-events-auto inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/35 bg-charcoal/30 px-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-charcoal/55 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-honey"
        >
          <Play aria-hidden="true" size={16} fill="currentColor" />
          Watch video
        </button>
      </div>
      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-labelledby={`${dialogId}-title`}
        onClose={() => setShowPlayer(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-charcoal p-0 text-white shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <h2 id={`${dialogId}-title`} className="text-sm font-bold sm:text-base">Golden Bagel Cafe</h2>
          <button
            type="button"
            aria-label="Close video"
            onClick={() => dialogRef.current?.close()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-4 focus-visible:outline-honey"
          >
            <X aria-hidden="true" size={21} />
          </button>
        </div>
        {showPlayer ? (
          <video
            src="/goldenbagels/hero/header-video.mp4"
            aria-label="Golden Bagel Cafe video"
            controls
            autoPlay
            playsInline
            preload="none"
            className="block max-h-[calc(100svh-8rem)] w-full bg-black"
          />
        ) : null}
      </dialog>
    </>
  );
}
