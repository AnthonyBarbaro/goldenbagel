"use client";

import { useState } from "react";
import { type VisitPhoto, visitPhotos } from "@/data/visitPhotos";
import { classNames } from "@/lib/format";

function PhotoCard({ photo, featured = false }: { photo: VisitPhoto; featured?: boolean }) {
  const [src, setSrc] = useState<string>(photo.src);
  const [isHidden, setIsHidden] = useState(false);

  function handleError() {
    if ("fallbackSrc" in photo && photo.fallbackSrc && src !== photo.fallbackSrc) {
      setSrc(photo.fallbackSrc);
      return;
    }

    setIsHidden(true);
  }

  if (isHidden) {
    return null;
  }

  return (
    <div className={classNames("overflow-hidden rounded-[1.5rem] bg-cream shadow-soft ring-1 ring-charcoal/8", featured && "lg:row-span-2")}>
      <img src={src} alt={photo.alt} onError={handleError} className={classNames("h-full w-full object-cover", featured ? "min-h-[320px]" : "min-h-[180px]")} />
    </div>
  );
}

export function VisitPhotoGallery() {
  return (
    <section className="bg-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-toast">Store photos</p>
          <h2 className="mt-3 font-serif text-3xl font-black text-charcoal sm:text-5xl">Know the spot before you arrive.</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {visitPhotos.map((photo, index) => (
            <PhotoCard key={photo.src} photo={photo} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
