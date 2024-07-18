"use client";

import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";
import { OrderProvider } from "./context/OrderContext";
import { UserProvider } from "./context/UserContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Pc94CCvj25n1SVeAWyPwlWhGgbbqY89nCGR0pUvimDn1tD3qcT1g0KSccTSW7koybdsnkcvywnMvml7Q2IgUkiM00shURYZNJ"
);

const pop = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`${cn(pop.className)}`}>
          <QueryClientProvider client={queryClient}>
            <UserProvider>
              <OrderProvider>
                <Elements stripe={stripePromise}>
                  <main>{children}</main>
                </Elements>
              </OrderProvider>
            </UserProvider>
          </QueryClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
