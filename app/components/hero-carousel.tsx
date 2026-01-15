"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const heroSlides = [
  {
    title: "Built to Last Generations",
    subtitle: "Luxury Custom Home Builders",
    description:
      "Oregon custom homes built with detailed excellence, designed for the unique beauty of oceanfront living.",
    image: "/images/hero/CannonBeachCottage-exterior.jpg",
    alt: "Cannon Beach cottage exterior"
  },
  {
    title: "Detailed Excellence",
    subtitle: "Nation Green Builder Award Winner",
    description:
      "Time-tested methods combined with sustainable building practices, recognized nationally for green construction.",
    image: "/images/hero/green-kitchen.jpg",
    alt: "Green building kitchen interior"
  },
  {
    title: "Historic Restoration",
    subtitle: "Preserving Oregon's Heritage",
    description:
      "From Governor Oswald West's 1913 log cabin to custom beach homes, we bring expertise and craftsmanship to every project.",
    image: "/images/hero/Oswald-Home.jpg",
    alt: "Governor Oswald West historic home restoration"
  }
];

export const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 6000
        })
      ]}
      className="w-full"
    >
      <CarouselContent className="ml-0">
        {heroSlides.map((slide, index) => (
          <CarouselItem key={index} className="pl-0">
            <div className="relative flex min-h-screen items-center justify-center">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/80">
                  {slide.subtitle}
                </p>

                <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>

                <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-4 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white md:left-8" />
      <CarouselNext className="right-4 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white md:right-8" />
    </Carousel>
  );
};
