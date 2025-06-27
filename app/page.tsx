"use client"
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/home";
import { DotLoader } from "@/components/gsap/dot-loader";
import Eight from "@/components/animata/bento-grid/eight";
import WhyUsSection from "@/components/why-us";
import FooterCard from "@/components/footer";
import Image from "next/image";


export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const game = [
    [14, 7, 0, 8, 6, 13, 20],
    [14, 7, 13, 20, 16, 27, 21],
    [14, 20, 27, 21, 34, 24, 28],
    [27, 21, 34, 28, 41, 32, 35],
    [34, 28, 41, 35, 48, 40, 42],
    [34, 28, 41, 35, 48, 42, 46],
    [34, 28, 41, 35, 48, 42, 38],
    [34, 28, 41, 35, 48, 30, 21],
    [34, 28, 41, 48, 21, 22, 14],
    [34, 28, 41, 21, 14, 16, 27],
    [34, 28, 21, 14, 10, 20, 27],
    [28, 21, 14, 4, 13, 20, 27],
    [28, 21, 14, 12, 6, 13, 20],
    [28, 21, 14, 6, 13, 20, 11],
    [28, 21, 14, 6, 13, 20, 10],
    [14, 6, 13, 20, 9, 7, 21],
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading ? (
        <div className="min-h-screen w-screen flex justify-center items-center">
          <div className="flex items-center justify-center w-fit gap-5 rounded bg-black p-3 text-white">
            <div className="">
              <DotLoader
                frames={game}
                className="gap-0.5"
                dotClassName="bg-white/15 [&.active]:bg-white size-1.5"></DotLoader>
            </div>
            {/* <p className="font-medium">Loading</p> */}
          </div>
        </div>
      ) : (
        <main className="min-h-screen flex flex-col flex-grow bg-background w-full relative">
          <div className="w-full relative z-10">

            <div className="absolute min-h-screen inset-0 -z-10">
              <Image
                src="/bgHome.jpg"
                alt="Background"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div>

          </div>

          <Header />


          {/* Hero Content */}
          <div className="relative z-10">
            <Hero />
          </div>

          <div className="relative z-10 py-12 mx-2 lg:mx-12 max-h-fit">
            <div className="bg-white-200/50 backdrop-blur-xl rounded-2xl shadow-xl shadow-white-300/30 border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl animate-pulse"></div>

              <div className="relative z-10 py-6 md:py-12 px-6 md:px-12 lg:px-24">
                <Eight />
              </div>
            </div>
          </div>

          <div className="w-full relative z-10">

            <div className="absolute min-h-screen inset-0 -z-10">
              <Image
                src="/bgHome4.jpeg"
                alt="Background"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div>
            <div className="relative z-10">
              <WhyUsSection />
            </div>

            <FooterCard />

          </div>




        </main>
      )}
    </>
  );
}