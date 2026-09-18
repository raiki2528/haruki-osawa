import Image, { type ImageProps } from "next/image";

type ContentImageProps = Omit<ImageProps, "quality" | "className"> & {
  priority?: boolean;
  alt: string;
  /** Person photos: show full frame. Video thumbs: fill 16:9 tile. */
  variant?: "portrait" | "video";
  position?: string;
};

export function ContentImage({
  priority = false,
  sizes,
  variant = "portrait",
  position,
  style,
  ...props
}: ContentImageProps) {
  const fitClass = variant === "portrait" ? "img-portrait" : "img-video";

  return (
    <Image
      {...props}
      priority={priority}
      quality={priority ? 82 : 72}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      sizes={sizes ?? (variant === "video" ? "(max-width: 860px) 100vw, 40vw" : "(max-width: 860px) 90vw, 42vw")}
      className={fitClass}
      style={{
        objectPosition: position ?? (variant === "portrait" ? "center top" : "center center"),
        ...style,
      }}
    />
  );
}
