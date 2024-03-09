import React from "react";
import { Button } from "../ui/button";
import ProfileButton from "../ui/ProfileButton";
import Container from "../Container";
import Link from "next/link";
import { Bell, Menu, X, Plus } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

// interface AnotherComponentProps {
//   mobileOpen: boolean;
//   setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }
const BrandNavbar = ({ mobileOpen, setMobileOpen }) => {
  const handleMobileIcon = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className="sticky top-0 z-20 bg-white shadow-md">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex  items-center space-x-4">
            <div className="flex lg:hidden">
              {mobileOpen ? (
                <X onClick={() => handleMobileIcon()} />
              ) : (
                <Menu onClick={() => handleMobileIcon()} />
              )}
            </div>

            <div>
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
          </div>
          <div className="flex items-center space-x-6">
            {/* create job */}
            <Button asChild variant="ghost" size="icon">
              <Link href="/createTask">
                <Plus />
              </Link>
            </Button>

            {/* notification */}
            <Sheet>
              <SheetTrigger>
                <Button variant="ghost" size="icon">
                  <Bell />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className=" relative flex flex-col mx-6 space-y-4 lg:space-x-6 h-screen w-[90%] lg:w-[23%]"></nav>
              </SheetContent>
            </Sheet>

            {/* profile */}
            <div className="ml-3 relative">
              <ProfileButton />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrandNavbar;
