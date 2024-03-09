"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon, Bell } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { useSession } from "next-auth/react";
import ProfileButton from "./ui/ProfileButton";
const navItem = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];
const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <header className="py-2 z-[10] sticky top-0 left-0 bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <div className="ml-2 lg:ml-0">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-gray-100"
            >
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-[5rem]"
              />
            </Link>
          </div>
          {/* desktop navbar */}
          <div className="hidden lg:flex space-x-4">
            {navItem.map((route, i) => (
              <Button key={i} asChild variant="ghost">
                <Link
                  key={i}
                  href={route.link}
                  className="text-sm transition-colors font-medium"
                >
                  {route.name}
                </Link>
              </Button>
            ))}
            {session?.user ? (
              <div className="flex items-center space-x-3">
                <Button asChild variant="ghost">
                  <Link href="/home">Dashboard</Link>
                </Button>

                <ProfileButton />
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button asChild variant="ghost">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild variant="main">
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>
          {/* mobile navbar */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="w-6 h-6 lg:hidden mr-2 lg:mr-2" />
              </SheetTrigger>
              <SheetContent>
                <nav className=" relative flex flex-col mx-6 space-y-4 lg:space-x-6 h-screen w-full">
                  {navItem.map((route, i) => (
                    <Button key={i} asChild variant="ghost">
                      <Link
                        key={i}
                        href={route.link}
                        className="text-sm transition-colors font-medium"
                      >
                        {route.name}
                      </Link>
                    </Button>
                  ))}
                  <div className="absolute bottom-4 left-0 items-center w-full">
                    <Button asChild variant="ghost" className="w-full my-4">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild variant="main" className="w-full mb-3">
                      <Link href="/register">Register</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
