import { createContext } from "react";

export const Themecontext = createContext("light");
export const Themeprovider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(() => (theme === "light" ? "dark" : "light"));
  };
  return (
    <Themecontext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </Themecontext.Provider>
  );
};
