"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

type NavigationAuth = {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
};

export function useNavigationAuth(): NavigationAuth {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    let active = true;
    let requestId = 0;

    async function checkAdmin() {
      const currentRequest = ++requestId;

      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error || !session?.access_token) {
          if (active && currentRequest === requestId) {
            setIsAdmin(false);
          }
          return;
        }

        const response = await fetch("/api/admin/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session.access_token}`,
            Accept: "application/json",
          },
          cache: "no-store",
        });

        if (active && currentRequest === requestId) {
          setIsAdmin(response.ok);
        }
      } catch (error) {
        console.error("[Navigation admin verification]", error);

        if (active && currentRequest === requestId) {
          setIsAdmin(false);
        }
      }
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;

      setUser(session?.user ?? null);

      if (!session) {
        ++requestId;
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      setLoading(false);

      if (
        event === "INITIAL_SESSION" ||
        event === "SIGNED_IN" ||
        event === "TOKEN_REFRESHED" ||
        event === "USER_UPDATED"
      ) {
        // Run after the auth callback completes.
        setTimeout(() => {
          if (active) void checkAdmin();
        }, 0);
      }
    });

    return () => {
      active = false;
      ++requestId;
      subscription.unsubscribe();
    };
  }, []);

  return { user, loading, isAdmin };
}