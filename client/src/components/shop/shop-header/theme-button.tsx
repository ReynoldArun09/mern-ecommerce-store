import { Button } from "@/components/ui/button";
import useTheme from "@/hooks/useTheme";
import { Laptop, Moon, Sun } from "lucide-react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant={"link"}
      onClick={() =>
        setTheme(
          theme === "system" ? "light" : theme === "light" ? "dark" : "system"
        )
      }
    >
      {theme === "system" ? <Moon /> : theme === "light" ? <Sun /> : <Laptop />}
      <span className="sr-only">theme button</span>
    </Button>
  );
}
