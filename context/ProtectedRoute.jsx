"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Session is being fetched

    if (!session) {
      // User is not authenticated, redirect to login page
      router.replace("/login");
    }
  }, [session, status, router]);

  // Render children only if the user is authenticated
  return session ? children : null;
};

export default ProtectedRoute;
