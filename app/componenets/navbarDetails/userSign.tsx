import { useFetchUsers } from "@/app/context/UserContext";
import { useAuth, UserButton, useUser } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";

export default function UserSignPage() {
  const { isSignedIn, user } = useUser();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const isAuth = !!userId;
  const { users, current } = useFetchUsers();

  useEffect(() => {
    if (isSignedIn && user && !current) {
      const postUserData = async () => {
        const token = await getToken();
        try {
          await axios.post(
            "/api/proxyUser",
            {
              name: user.firstName + " " + user.lastName,
              email: user.emailAddresses[0].emailAddress,
              password: user.id,
              passwordConfirm: user.id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } catch (error) {
          console.error("Error posting user data:", error);
        }
      };

      postUserData();
    }
  }, [isSignedIn, user, getToken]);

  return (
    <div>
      <div className="flex gap-10">
        {!isAuth ? (
          <>
            <Link href="/sign-in">
              <li>Login</li>
            </Link>
            <Link href="/sign-up">
              <li>Sign Up</li>
            </Link>
          </>
        ) : (
          <>
            {/* <Link href="/profile">
              <li>Profile</li>
            </Link> */}
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </>
        )}
      </div>
    </div>
  );
}
