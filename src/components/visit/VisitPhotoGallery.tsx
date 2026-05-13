"use client";

import { Camera } from "lucide-react";
import { useState } from "react";
import { visitPhotos } from "@/data/visitPhotos";
import { classNames } from "@/lib/format";

type VisitPhoto = (typeof visitPhotos)[number];

function PhotoCard({ photo, featured = false }: { photo: VisitPhoto; featured?: boolean }) {
  const [src, setSrc] = useState<string>(photo.src);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  function handleError() {
    if ("fallbackSrc" in photo && photo.fallbackSrc && src !== photo.fallbackSrc) {
      setSrc(photo.fallbackSrc);
      return;
    }

    setShowPlaceholder(true);
  }

  return (
    <div className={classNames("overflow-hidden rounded-[1.5rem] bg-cream shadow-soft ring-1 ring-charcoal/8", featured && "lg:row-span-2")}>
      {!showPlaceholder ? (
        <img src={src} alt={photo.alt} onError={handleError} className={classNames("h-full w-full object-cover", featured ? "min-h-[320px]" : "min-h-[180px]")} />
      ) : (
        <div
          className={classNames(
            "flex h-full min-h-[180px] flex-col items-center justify-center bg-[linear-gradient(135deg,#fff8ec,#f8df9f)] p-6 text-center",
            featured && "min-h-[320px]"
          )}
        >
          <Camera aria-hidden="true" className="text-toast" size={34} />
          <p className="mt-4 text-lg font-black text-charcoal">{photo.fallbackLabel}</p>
          <p className="mt-1 text-sm font-bold text-espresso/62">Photo coming soon.</p>
        </div>
      )}
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
