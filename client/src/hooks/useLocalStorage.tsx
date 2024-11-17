import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState<T>(parsedValue);

  useEffect(() => {
    if (value !== parsedValue) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, parsedValue]);

  return [value, setValue] as const;
}
