
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

    async function checkAdmin(accessToken: string) {
      try {
        const response = await fetch(
          "https://miltons-pharma-api.miltonbiswasdev.workers.dev/api/admin/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            cache: "no-store",
          },
        );

        if (active) {
          setIsAdmin(response.ok);
        }
      } catch {
        if (active) setIsAdmin(false);
      }
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;

      setUser(session?.user ?? null);

      if (!session) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      setLoading(false);

      if (event === "INITIAL_SESSION" || event === "SIGNED_IN" ||
          event === "TOKEN_REFRESHED" || event === "USER_UPDATED") {
        void checkAdmin(session.access_token);
      }
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  return { user, loading, isAdmin };
}
