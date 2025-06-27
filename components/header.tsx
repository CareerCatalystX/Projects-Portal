"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 backdrop-blur-lg bg-white/60 border-b border-purple-100 shadow-[10px_0_15px_rgba(37,99,235,0.6),20px_0_20px_rgba(128,0,128,0.5),30px_0_25px_rgba(37,99,235,0.4)] w-full z-50">
      <div className="flex h-16 items-center justify-between w-full pl-2 pr-6">
        {/* Logo or Title */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <Image src="/logo-master.png" alt="Logo" width={196} height={64} />
            </div>

            {/* Desktop Navigation (Visible only on MD+) */}
            <nav className="hidden lg:flex lg:flex-row items-center text-center gap-4">
              {["Features", "Pricing", "About", "Contact Us"].map(
                (item) => (
                  <p
                    key={item}
                    className="hover:cursor-pointer font-light px-2 py-1 text-sm bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 bg-clip-text text-transparent"
                    onClick={() => router.push(`/${item.toLowerCase()}`)}
                  >
                    {item}
                  </p>
                )
              )}
            </nav>
          </div>
          <div className="hidden lg:flex gap-2 items-center">
            <Button variant="ghost" className="bg-gradient-to-r font-light from-purple-950 via-purple-700 to-purple-950 bg-clip-text text-transparent hover:text-transparent" onClick={() => { router.push("/student/login") }}>Explore Projects</Button>
            <div className="bg-white flex items-center justify-center">
              <button className="px-4 py-1 text-sm font-light bg-gradient-to-r from-purple-700 via-purple-400 to-purple-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-md hover:translate-x-[3px] hover:translate-y-[3px] rounded-md border-black border" onClick={() => { router.push("/resume")}}>
                Build Resume
              </button>
            </div>
            <div className="bg-white flex items-center justify-center">
              <button className="px-4 py-1 text-sm font-light bg-gradient-to-r from-purple-700 via-purple-400 to-purple-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-md rounded-md border-black border" onClick={() => { router.push("/internship")}}>
                Internship Oppurtinities
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Trigger */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-all duration-200 w-4 h-16 flex items-center justify-center bg-transparent hover:bg-transparent"
                aria-label="Open Menu"
              >
                <Menu className="text-purple-700" style={{ width: "24px", height: "24px" }} />
              </Button>

            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] shadow-md bg-white">
              <SheetHeader>
                <SheetTitle className="text-purple-700">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4 items-center justify-between h-full">
                <div className="flex flex-col gap-4 items-center">
                  {["Features", "Pricing", "About", "Contact Us"].map(
                    (item) => (
                      <Button
                        variant="ghost"
                        key={item}
                        className="hover:underline hover:cursor-pointer font-light px-2 py-1 text-black hover:bg-white"
                        onClick={() => router.push(`/${item.toLowerCase()}`)}
                      >
                        {item}
                      </Button>
                    )
                  )}
                </div>

                <div className="flex gap-8 items-center">
                  <Button
                    variant="ghost"
                    className="bg-gradient-to-r font-light from-purple-950 via-purple-700 to-purple-950 bg-clip-text text-transparent hover:text-transparent"
                    onClick={() => router.push("/student/login")}
                  >
                    Log in
                  </Button>
                  <div className="bg-white min-h-[200px] flex items-center justify-center">
                    <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                      Hover me
                    </button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
