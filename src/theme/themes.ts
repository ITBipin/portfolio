export type ThemeChoice = 'system' | 'dark' | 'light' | 'ocean' | 'purple' | 'emerald' | 'sunset' | 'cyber';
export type ThemeName = Exclude<ThemeChoice, 'system'>;

type ThemeDefinition = {
  label: string;
  icon: string;
  colors: {
    background: string;
    section: string;
    surface: string;
    surfaceStrong: string;
    text: string;
    muted: string;
    accent: string;
    accentSoft: string;
    accentHover: string;
    border: string;
    shadow: string;
    gradient: string;
  };
};

export const themes: Record<ThemeName, ThemeDefinition> = {
  dark: { label: 'Default Dark', icon: 'moon', colors: { background: '#071014', section: '#0b171b', surface: '#102126', surfaceStrong: '#132a30', text: '#f8fafc', muted: '#94a3b8', accent: '#67e8f9', accentSoft: 'rgba(34, 211, 238, 0.10)', accentHover: '#a5f3fc', border: 'rgba(148, 163, 184, 0.22)', shadow: 'rgba(34, 211, 238, 0.14)', gradient: 'linear-gradient(135deg, #071014 0%, #0b2529 55%, #071014 100%)' } },
  light: { label: 'Light', icon: 'sun', colors: { background: '#f5f7f8', section: '#e8eef0', surface: '#ffffff', surfaceStrong: '#eef5f6', text: '#102126', muted: '#52636a', accent: '#087f8c', accentSoft: 'rgba(8, 127, 140, 0.10)', accentHover: '#075e68', border: 'rgba(16, 33, 38, 0.16)', shadow: 'rgba(8, 127, 140, 0.14)', gradient: 'linear-gradient(135deg, #f5f7f8 0%, #e5f2f2 55%, #f5f7f8 100%)' } },
  ocean: { label: 'Ocean', icon: 'waves', colors: { background: '#061526', section: '#08223a', surface: '#0b2d49', surfaceStrong: '#103b5c', text: '#edf9ff', muted: '#98b9ca', accent: '#38bdf8', accentSoft: 'rgba(56, 189, 248, 0.12)', accentHover: '#7dd3fc', border: 'rgba(125, 211, 252, 0.24)', shadow: 'rgba(14, 165, 233, 0.18)', gradient: 'linear-gradient(135deg, #061526 0%, #082d46 55%, #061526 100%)' } },
  purple: { label: 'Purple', icon: 'sparkles', colors: { background: '#120d1d', section: '#1b122b', surface: '#26183a', surfaceStrong: '#34204c', text: '#fbf7ff', muted: '#b9a9c9', accent: '#c084fc', accentSoft: 'rgba(192, 132, 252, 0.12)', accentHover: '#e9d5ff', border: 'rgba(216, 180, 254, 0.24)', shadow: 'rgba(168, 85, 247, 0.18)', gradient: 'linear-gradient(135deg, #120d1d 0%, #241436 55%, #120d1d 100%)' } },
  emerald: { label: 'Emerald', icon: 'leaf', colors: { background: '#071713', section: '#0c241d', surface: '#10372b', surfaceStrong: '#164a39', text: '#f0fdf4', muted: '#9bb8aa', accent: '#34d399', accentSoft: 'rgba(52, 211, 153, 0.12)', accentHover: '#a7f3d0', border: 'rgba(110, 231, 183, 0.24)', shadow: 'rgba(16, 185, 129, 0.18)', gradient: 'linear-gradient(135deg, #071713 0%, #0c2e24 55%, #071713 100%)' } },
  sunset: { label: 'Sunset', icon: 'sunset', colors: { background: '#1d1010', section: '#301817', surface: '#47201c', surfaceStrong: '#5b2a21', text: '#fff7ed', muted: '#d2aaa0', accent: '#fb923c', accentSoft: 'rgba(251, 146, 60, 0.12)', accentHover: '#fed7aa', border: 'rgba(253, 186, 116, 0.25)', shadow: 'rgba(234, 88, 12, 0.18)', gradient: 'linear-gradient(135deg, #1d1010 0%, #3a1c18 55%, #1d1010 100%)' } },
  cyber: { label: 'AI / Cyber', icon: 'cpu', colors: { background: '#060b16', section: '#0b1324', surface: '#101d35', surfaceStrong: '#14294a', text: '#f0f9ff', muted: '#93acc8', accent: '#22d3ee', accentSoft: 'rgba(34, 211, 238, 0.13)', accentHover: '#a5f3fc', border: 'rgba(34, 211, 238, 0.30)', shadow: 'rgba(34, 211, 238, 0.22)', gradient: 'linear-gradient(135deg, #060b16 0%, #0d1830 55%, #060b16 100%)' } },
};

export const themeChoices: ThemeChoice[] = ['system', 'dark', 'light', 'ocean', 'purple', 'emerald', 'sunset', 'cyber'];

export function getStoredTheme(): ThemeChoice {
  const stored = localStorage.getItem('portfolio-theme') as ThemeChoice | null;
  return stored && themeChoices.includes(stored) ? stored : 'dark';
}
