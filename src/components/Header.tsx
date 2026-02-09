import Link from "next/link";
import SearchInput from "./SearchInputs";
import { Package } from "lucide-react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow">

      <div className="container mx-auto px-4">

        {/* TOP BAR */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-6 w-6 text-primary dark:text-white" />
            <span className="text-xl font-bold dark:text-white">
              TechHearware
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 mx-4">
            <SearchInput />
          </div>

          {/* Navbar */}
          <Navbar />
        </div>

        {/* ✅ Mobile Search (NEW) */}
        <div className="md:hidden pb-3">
          <SearchInput />
        </div>

      </div>
    </header>
  );
}
