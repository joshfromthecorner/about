"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@wits/next-themes";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePressedChange = (pressed: boolean) => {
    setTheme(pressed ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      aria-label="Toggle dark mode"
      size="sm"
      variant="outline"
      pressed={isDark}
      onPressedChange={handlePressedChange}
      className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
    >
      {isDark ? (
        <Moon size={16} strokeWidth={2} />
      ) : (
        <Sun size={16} strokeWidth={2} />
      )}
    </Toggle>
  );
};

export default ThemeSwitch;
