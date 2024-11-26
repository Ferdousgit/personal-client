"use client";
import { navData } from "@/constant/navData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../mode-toggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import useUserShortDetails from "@/hooks/user-user-short-details";

const Navbar = () => {
  const pathname = usePathname();
  const [path, setPath] = useState("");
  const { user } = useUserShortDetails();

  useEffect(() => {
    const last = pathname.split("/");
    const path = last[last.length - 1].trim()
      ? last.pop()
      : last[last.length - 2];
    setPath(path ?? "");
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 container mx-auto p-4 shadow-lg bg-inherit">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="sm:text-2xl text-xl font-bold">
            {user?.fullName ?? ""}
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="md:flex justify-center items-center gap-3 hidden">
          {navData.map((data) => (
            <div
              key={data.value}
              className={cn(
                "group relative text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition duration-300",
                {
                  "text-gray-600 dark:text-gray-300": `/${path}` === data.value,
                }
              )}
            >
              <Link href={data.value}>{data.label}</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-1 rounded bg-gray-400 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
          <ModeToggle screen="lg" />
        </div>

        {/* mobile nav */}
        <div className="block md:!hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size={"icon"}>
                <AlignJustify />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-56">
              <DropdownMenuGroup>
                {navData.map((data) => (
                  <Link
                    href={data.value}
                    key={data.value}
                    className="cursor-pointer"
                  >
                    <DropdownMenuItem>{data.label}</DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <ModeToggle screen="sm" />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
