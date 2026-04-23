"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: string[];
  badge?: string;
}

export function ProductImageGallery({ images, badge }: ProductImageGalleryProps) {
  const galleryImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!galleryImages.length) {
    return null;
  }

  return (
    <div className="space-y-4 rounded-xl border border-border bg-white p-4">
      <div className="relative overflow-hidden rounded-lg border border-border bg-slate-50">
        {badge ? (
          <span className="absolute right-4 top-4 z-10 rounded-md border border-border bg-primary-light px-3 py-1 text-sm font-semibold tracking-wide text-primary">
            {badge.toUpperCase()}
          </span>
        ) : null}
        <Image
          src={galleryImages[activeIndex]}
          alt="Product image"
          width={800}
          height={800}
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {galleryImages.slice(0, 4).map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "overflow-hidden rounded-md border border-border",
              activeIndex === index && "ring-2 ring-primary"
            )}
          >
            <Image src={image} alt={`Thumbnail ${index + 1}`} width={240} height={240} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}