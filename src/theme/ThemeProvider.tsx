import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getStoredTheme, themes, type ThemeChoice, type ThemeName } from './themes';

type ThemeContextValue = {
  theme: ThemeChoice;
  activeTheme: ThemeName;
  setTheme: (theme: ThemeChoice) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function resolveTheme(theme: ThemeChoice): ThemeName {
  if (theme !== 'system') return theme;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeChoice>(() => getStoredTheme());
  const activeTheme = resolveTheme(theme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = activeTheme;
    root.dataset.themeChoice = theme;
    Object.entries(themes[activeTheme].colors).forEach(([key, value]) => root.style.setProperty(`--theme-${key}`, value));
    localStorage.setItem('portfolio-theme', theme);
  }, [activeTheme, theme]);

  useEffect(() => {
    if (theme !== 'system') return undefined;
    const media = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = () => setThemeState('system');
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [theme]);

  const value = useMemo(() => ({ theme, activeTheme, setTheme: (nextTheme: ThemeChoice) => setThemeState(nextTheme) }), [activeTheme, theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
