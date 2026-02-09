import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative w-full">
      <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

      <input
        type="text"
        placeholder="Search products..."
        className="
          w-full
          rounded-md
          bg-gray-200
          py-2
          pl-10
          pr-3
          text-black
          dark:bg-gray-900/50
          dark:text-white
        "
      />
    </div>
  );
}
