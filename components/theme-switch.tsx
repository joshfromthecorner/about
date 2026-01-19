"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import MoonIcon from "@/components/icons/moon-icon";
import SunIcon from "@/components/icons/sun-icon";

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
      className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
    >
      {isDark ? (
        <MoonIcon size={16} strokeWidth={2} />
      ) : (
        <SunIcon size={16} strokeWidth={2} />
      )}
    </Toggle>
  );
};

export default ThemeSwitch;
