"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center animate-pulse"></div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-10 w-20 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-slate-700 bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      role="switch"
      aria-checked={isDark}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sun Icon (Left side) */}
      <span className={`absolute left-2 z-10 flex h-6 w-6 items-center justify-center transition-opacity ${isDark ? 'opacity-50' : 'opacity-100'}`}>
        <Sun className="h-4 w-4 text-amber-400" />
      </span>

      {/* Moon Icon (Right side) */}
      <span className={`absolute right-2 z-10 flex h-6 w-6 items-center justify-center transition-opacity ${isDark ? 'opacity-100' : 'opacity-50'}`}>
        <Moon className="h-4 w-4 text-teal-300" />
      </span>

      {/* Sliding Pill */}
      <span
        className={`pointer-events-none absolute h-8 w-8 rounded-full bg-slate-600 shadow-md ring-0 transition-transform duration-300 ease-in-out z-0 ${
          isDark ? "translate-x-5" : "-translate-x-5"
        }`}
      />
    </button>
  );
}
