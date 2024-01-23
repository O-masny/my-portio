"use client";
import { useState, useEffect, ReactElement } from "react";
import { createContext } from "react";

const ThemeProvider = createContext({
  isPaintingTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isPaintingTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isPaintingTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isPaintingTheme", `true`);
      document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isPaintingTheme: boolean = JSON.parse(
        localStorage.getItem("isPaintingTheme")!
      );
      isPaintingTheme && document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(() => {
        return isPaintingTheme;
      });
    }
  }

  function toggleThemeHandler(): void {
    const isPaintingTheme: boolean = JSON.parse(
      localStorage.getItem("isPaintingTheme")!
    );
    setIsDarkTheme(!isPaintingTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector("body")!.classList.toggle("dark");
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isPaintingTheme", `${!isPaintingTheme}`);
  }

  return (
    <ThemeProvider.Provider
      value={{ isPaintingTheme: true, toggleThemeHandler }}
    >
      {props.children}
    </ThemeProvider.Provider>
  );
}

export default ThemeProvider;
