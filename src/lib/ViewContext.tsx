import { createContext, useContext, useState, useMemo, type ReactNode } from "react";

export type View =
  | { name: "dashboard" }
  | { name: "about" }
  | { name: "module"; moduleId: string };

interface ViewContextValue {
  view: View;
  goDashboard: () => void;
  goAbout: () => void;
  openModule: (moduleId: string) => void;
}

const ViewContext = createContext<ViewContextValue | null>(null);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>({ name: "dashboard" });

  const value = useMemo<ViewContextValue>(
    () => ({
      view,
      goDashboard: () => setView({ name: "dashboard" }),
      goAbout: () => setView({ name: "about" }),
      openModule: (moduleId) => setView({ name: "module", moduleId }),
    }),
    [view]
  );

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
}

export function useView() {
  const ctx = useContext(ViewContext);
  if (!ctx) throw new Error("useView must be used within ViewProvider");
  return ctx;
}
