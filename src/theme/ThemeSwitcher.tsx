import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Cpu, Leaf, Moon, Palette, Sparkles, Sun, Sunset, Waves } from 'lucide-react';
import { themeChoices, themes, type ThemeChoice } from './themes';
import { useTheme } from './ThemeProvider';

const iconMap = { moon: Moon, sun: Sun, waves: Waves, sparkles: Sparkles, leaf: Leaf, sunset: Sunset, cpu: Cpu };

export default function ThemeSwitcher() {
  const { theme, activeTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const selectTheme = (nextTheme: ThemeChoice) => {
    setTheme(nextTheme);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="theme-switcher">
      <button type="button" aria-haspopup="dialog" aria-expanded={open} aria-label="Choose portfolio theme" onClick={() => setOpen((current) => !current)} className="theme-trigger">
        <Palette size={15} /> <span>Theme</span> <ChevronDown size={13} className={open ? 'rotate-180' : ''} />
      </button>
      {open && <div role="dialog" aria-label="Portfolio themes" className="theme-popover">
        <div className="mb-3 flex items-center justify-between"><div><p className="label">Appearance</p><p className="mt-1 text-xs text-[var(--theme-muted)]">{theme === 'system' ? 'Following system' : themes[activeTheme].label}</p></div><Palette size={16} className="text-[var(--theme-accent)]" /></div>
        <div className="grid grid-cols-2 gap-2">
          {themeChoices.map((choice) => {
            const isSystem = choice === 'system';
            const definition = isSystem ? themes[activeTheme] : themes[choice];
            const Icon = isSystem ? Palette : iconMap[definition.icon as keyof typeof iconMap];
            const selected = theme === choice;
            return <button key={choice} type="button" aria-pressed={selected} onClick={() => selectTheme(choice)} className={`theme-option ${selected ? 'theme-option-selected' : ''}`}><span className="theme-swatch" style={{ background: definition.colors.gradient, borderColor: definition.colors.accent }}><Icon size={13} /></span><span>{isSystem ? 'System' : definition.label}</span>{selected && <Check size={13} className="ml-auto" />}</button>;
          })}
        </div>
      </div>}
    </div>
  );
}
