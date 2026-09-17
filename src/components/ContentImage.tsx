import Image, { type ImageProps } from "next/image";

type ContentImageProps = Omit<ImageProps, "quality"> & {
  priority?: boolean;
  alt: string;
};

export function ContentImage({ priority = false, sizes, ...props }: ContentImageProps) {
  return (
    <Image
      {...props}
      priority={priority}
      quality={priority ? 80 : 68}
      loading={priority ? undefined : "lazy"}
      sizes={sizes ?? "(max-width: 860px) 100vw, 50vw"}
    />
  );
}
