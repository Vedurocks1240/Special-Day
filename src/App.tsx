import { useEffect, useMemo, useState } from "react";
import {
  specialDays,
  findSpecialDay,
  toDateKey,
  RANGE_START,
  RANGE_END,
  type SpecialDay,
} from "./data/festivals";
import { themes } from "./data/themes";
import Decor from "./components/Decor";
import "./App.css";

function clampToRange(dateKey: string): string {
  if (dateKey < RANGE_START) return RANGE_START;
  if (dateKey > RANGE_END) return RANGE_END;
  return dateKey;
}

function formatLong(dateKey: string): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  const da = Date.UTC(ay, am - 1, ad);
  const db = Date.UTC(by, bm - 1, bd);
  return Math.round((db - da) / 86400000);
}

function findNext(dateKey: string): SpecialDay | undefined {
  const upcoming = specialDays.filter((d) => d.date > dateKey);
  return upcoming[0];
}

const sorted = [...specialDays].sort((a, b) => (a.date < b.date ? -1 : 1));

export default function App() {
  const todayKey = clampToRange(toDateKey(new Date()));
  const [selected, setSelected] = useState<string>(todayKey);
  const [showAll, setShowAll] = useState(false);

  const isToday = selected === todayKey;
  const today = findSpecialDay(selected);
  const theme = themes[today?.theme ?? "default"];
  const next = today ? undefined : findNext(selected);
  const daysToNext = next ? daysBetween(selected, next.date) : null;

  useEffect(() => {
    document.title = today ? `${today.title} — Utsav` : "Utsav — India's Special Days";
  }, [today]);

  const upcomingList = useMemo(() => {
    return sorted.filter((d) => d.date >= selected).slice(0, 14);
  }, [selected]);

  function shiftDay(delta: number) {
    const [y, m, d] = selected.split("-").map(Number);
    const dt = new Date(y, m - 1, d + delta);
    setSelected(clampToRange(toDateKey(dt)));
  }

  return (
    <div
      className="app"
      style={{
        background: `radial-gradient(1200px 800px at 50% -10%, ${theme.bgVia}, ${theme.bgFrom} 55%, ${theme.bgTo} 100%)`,
      }}
    >
      <Decor theme={theme} seed={selected} />

      <div className="app-inner">
        <header className="topbar">
          <span className="brand">
            <span className="brand-mark">🪔</span> Utsav
          </span>
          <span className="brand-sub">India's Special Days · Aug 2026 – Dec 2027</span>
        </header>

        <main className="hero">
          <div className="date-nav">
            <button className="nav-btn" onClick={() => shiftDay(-1)} aria-label="Previous day">
              ‹
            </button>
            <div className="date-controls">
              <input
                type="date"
                className="date-input"
                value={selected}
                min={RANGE_START}
                max={RANGE_END}
                onChange={(e) => setSelected(clampToRange(e.target.value))}
              />
              {!isToday && (
                <button className="today-btn" onClick={() => setSelected(todayKey)}>
                  Jump to today
                </button>
              )}
            </div>
            <button className="nav-btn" onClick={() => shiftDay(1)} aria-label="Next day">
              ›
            </button>
          </div>

          <p className="date-label">{formatLong(selected)}</p>

          {today ? (
            <div className="reveal">
              <div className="emoji-badge" style={{ background: `${theme.accent}22`, borderColor: `${theme.accent}66` }}>
                {theme.emoji}
              </div>
              <h1 className="title" style={{ color: theme.accent, textShadow: `0 0 40px ${theme.glow}77` }}>
                {today.title}
              </h1>
              {today.subtitle && <p className="subtitle">{today.subtitle}</p>}
              {today.link && (
                <a
                  className="invite-btn"
                  href={today.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
                    color: theme.textOnAccent,
                    boxShadow: `0 0 28px ${theme.glow}66`,
                  }}
                >
                  🎟️ {today.link.label}
                </a>
              )}
              <span className="theme-pill" style={{ background: theme.accent, color: theme.textOnAccent }}>
                {theme.name}
              </span>
            </div>
          ) : (
            <div className="reveal">
              <div className="emoji-badge" style={{ background: `${theme.accent}22`, borderColor: `${theme.accent}66` }}>
                🌌
              </div>
              <h1 className="title muted-title">No special day today</h1>
              <p className="subtitle">An ordinary, quietly beautiful day in India.</p>
              {next && daysToNext !== null && (
                <p className="next-hint">
                  Next up: <strong style={{ color: themes[next.theme].accent }}>{next.title}</strong> in{" "}
                  {daysToNext} {daysToNext === 1 ? "day" : "days"} ({formatLong(next.date)})
                </p>
              )}
            </div>
          )}
        </main>

        <section className="listSection">
          <div className="listHeader">
            <h2>Upcoming Special Days</h2>
            <button className="toggle-btn" onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Show fewer" : "Show all in range"}
            </button>
          </div>
          <ul className="dayList">
            {(showAll ? sorted : upcomingList).map((d) => {
              const t = themes[d.theme];
              const active = d.date === selected;
              return (
                <li key={d.date + d.title}>
                  <button
                    className={`dayItem${active ? " dayItem-active" : ""}`}
                    style={{ borderColor: `${t.accent}55` }}
                    onClick={() => setSelected(d.date)}
                  >
                    <span className="dayItem-emoji">{t.emoji}</span>
                    <span className="dayItem-text">
                      <span className="dayItem-title" style={{ color: t.accent }}>
                        {d.title}
                      </span>
                      <span className="dayItem-date">{formatLong(d.date)}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <footer className="footer">
          <p>
            Covering {sorted.length} special days from {formatLong(RANGE_START)} to {formatLong(RANGE_END)}.
          </p>
        </footer>
      </div>
    </div>
  );
}
