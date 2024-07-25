"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { User, UserContextProps, Users } from "../types";
import { useQuery } from "react-query";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  const { data: fetchedUsers } = useQuery<Users>("users", async () => {
    const response = await axios.get<Users>(`http://127.0.0.1:3003/api/users`);

    return response.data;
  });

  const current = fetchedUsers?.data.data.find(
    (el) => el.email === user?.emailAddresses[0].emailAddress
  );

  const users = fetchedUsers?.data.data;

  const value = { users, current };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useFetchUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
