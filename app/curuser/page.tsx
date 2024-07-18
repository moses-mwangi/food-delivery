"use client";

import React from "react";
import { useFetchUsers } from "../context/UserContext";
import { useUser } from "@clerk/nextjs";

export default function ExamplesPage() {
  const { users, current } = useFetchUsers();
  const { user } = useUser();

  const address = {
    _id: current?._id,
    name: current?.name,
    email: current?.email,
    country: current?.country,
    city: current?.city,
    address: current?.address,
  };

  return (
    <div
      onClick={() => {
        console.log(users);
        console.log(address);
      }}
    >
      JUST FOR TESTING
    </div>
  );
}
