import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useIsAdmin() {
  const [state, setState] = useState<{ loading: boolean; isAdmin: boolean; userId?: string }>({
    loading: true,
    isAdmin: false,
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      const uid = userData.user?.id;
      if (!uid) {
        if (!cancelled) setState({ loading: false, isAdmin: false });
        return;
      }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      if (!cancelled) setState({ loading: false, isAdmin: !!data, userId: uid });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
