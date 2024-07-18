"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { User, UserContextProps } from "../types";
import { useQuery } from "react-query";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  const { data: users } = useQuery<User[]>("users", async () => {
    const response = await axios.get<User[]>(`/api/users`);
    return response.data;
  });

  const current = users?.find(
    (el) => el.email === user?.emailAddresses[0].emailAddress
  );

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
