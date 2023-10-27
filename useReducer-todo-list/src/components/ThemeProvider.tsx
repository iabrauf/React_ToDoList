import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext(false);
const ThemeUpdateContext = React.createContext<(() => void) | undefined>(undefined);

interface themeProps {
    children: React.ReactNode;
}

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
    const context = useContext(ThemeUpdateContext);
    if (!context) {
        throw new Error("useThemeUpdate must be used within a ThemeProvider");
    }
    return context;
};

const ThemeProvider: React.FC<themeProps> = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleMode = () => {
        setDarkTheme((prev) => !prev);
    };
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleMode}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
