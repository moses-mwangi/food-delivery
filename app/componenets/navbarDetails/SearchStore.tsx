"use client";

import { TypeRestaurant } from "@/app/types";
import { Input } from "@/components/ui/input";
import { useOneRestaurants } from "@/services/useOrder";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchStore() {
  const router = useRouter();
  const { restaurants } = useOneRestaurants();

  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    TypeRestaurant[] | undefined
  >([]);

  useEffect(() => {
    if (search === "") {
      setFilteredRestaurants([]);
    } else {
      const filtered = restaurants?.filter((restaurant) =>
        restaurant.restName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredRestaurants(filtered);

      if (filtered?.length === 1) {
        router.push(`/${filtered[0]?.restName}`);
      }
    }
  }, [search, router, restaurants]);

  const clearSearch = () => {
    setSearch("");
    setFilteredRestaurants([]);
    router.push("/");
  };

  return (
    <div className="md:w-[45%] w-full relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="text"
        className="rounded-3xl pl-10 py-5 w-full text-[16px] text-gray-500 focus:outline-none focus:border-none"
        placeholder="Search stores..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <X className="h-5 w-5 text-gray-400" />
        </button>
      )}
    </div>
  );
}
