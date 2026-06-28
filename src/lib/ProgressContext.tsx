import { createContext, useContext, useState, useMemo, type ReactNode } from "react";

interface ProgressContextValue {
  completed: Set<string>;
  isCompleted: (moduleId: string) => boolean;
  toggleComplete: (moduleId: string) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const value = useMemo<ProgressContextValue>(
    () => ({
      completed,
      isCompleted: (moduleId) => completed.has(moduleId),
      toggleComplete: (moduleId) =>
        setCompleted((prev) => {
          const next = new Set(prev);
          if (next.has(moduleId)) next.delete(moduleId);
          else next.add(moduleId);
          return next;
        }),
    }),
    [completed]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
