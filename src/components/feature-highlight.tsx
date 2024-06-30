import { cn } from "@/utils/cn"
import Image from "next/image"
import type { ComponentPropsWithoutRef } from "react"

export const FeatureHighlight = {
  Root: FeatureHighlightRoot,
  Description: FeatureHighlightDescription,
  Image: FeatureHighlightImage,
}

function FeatureHighlightRoot({
  children,
  className,
  invertFlex = false,
}: ComponentPropsWithoutRef<"div"> & { invertFlex?: boolean }) {
  return (
    <div
      className={cn(
        `border-b-2 border-black px-6 py-8 sm:px-12 sm:py-24`,
        className,
      )}
    >
      <div
        className={`flex ${invertFlex ? "flex-col-reverse" : "flex-col"} items-center justify-center xl:flex-row xl:gap-36`}
      >
        {children}
      </div>
    </div>
  )
}

function FeatureHighlightDescription({
  title,
  subtitle,
  description,
}: {
  title: string
  subtitle: string
  description: string
}) {
  return (
    <div className="px-0 sm:px-12 md:px-16 lg:px-0">
      <h4
        style={{ wordSpacing: "5px" }}
        className="mx-auto mb-2 max-w-4xl text-left text-3xl font-black uppercase md:text-5xl"
      >
        {title}
      </h4>

      <p className="font-inter mb-6 max-w-xl text-xl font-bold sm:mb-10 md:text-3xl">
        {subtitle}
      </p>

      <p className="font-inter mb-12 max-w-xl text-xl font-medium md:text-2xl">
        {description}
      </p>
    </div>
  )
}

function FeatureHighlightImage({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} width={600} height={400} />
}
