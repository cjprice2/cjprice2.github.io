import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className = "" }) => {
  /*
    Initialise theme:
    1. Use stored preference if it exists
    2. Otherwise fall back to the user's OS preference via matchMedia
  */
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  /*
    Sync the <html> class and localStorage whenever `isDark` changes
  */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((d) => !d)}
      className={cn("theme-toggle-button", className)}
    >
      {isDark ? (
        <Sun className="theme-toggle-sun" />
      ) : (
        <Moon className="theme-toggle-moon" />
      )}
    </button>
  );
};