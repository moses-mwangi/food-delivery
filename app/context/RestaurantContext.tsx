// "use client";
// import React, {
//   createContext,
//   useContext,
//   ReactNode,
//   useState,
//   useEffect,
// } from "react";
// import { fetchAuthenticatedUser } from "@/services/AuthentUser";
// import { User } from "@/types/User";

// interface RestaurantContextProps {
//   user: User | null;
//   error: Error | null;
//   loading: boolean;
// }

// const RestaurantContext = createContext<RestaurantContextProps | undefined>(
//   undefined
// );

// export const RestaurantProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const [restaurants, setRestaurants] = useState<TypeRestaurant[]>([]);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await axios.get("/api/restaurants");

//         setRestaurants(response.data);
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   const value = { user };

//   return (
//     <RestaurantContext.Provider value={value}>
//       {children}
//     </RestaurantContext.Provider>
//   );
// };

// export const useRestaurant = () => {
//   const context = useContext(RestaurantContext);
//   if (!context) {
//     throw new Error("useRestaurant must be used within a ,RestaurantProvider");
//   }
//   return context;
// };
