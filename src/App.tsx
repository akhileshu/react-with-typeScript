import React, { ReactNode, createContext, useState } from "react";
import Box from "./Box";
type ThemeType = "light" | "dark";
interface ThemeContextType {
  theme: ThemeType;
  toggleThem: () => void;
}

// export the created context
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleThem: () => {},
});

// ThemeProvider is a functional component that wraps children - i.e App with context- i.e  ThemeContext
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleThem = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleThem }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div>hello</div>
      <Box></Box>
    </ThemeProvider>
  );
}

export default App;
