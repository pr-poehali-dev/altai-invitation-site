import { useEffect, useState } from 'react';

const TARGET = new Date('2026-08-14T16:00:00');

function diff() {
  const ms = Math.max(0, TARGET.getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

const labels: Record<string, string> = {
  days: 'кӱн',
  hours: 'час',
  minutes: 'минут',
  seconds: 'секунд',
};

const Countdown = () => {
  const [t, setT] = useState(diff());

  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      {(['days', 'hours', 'minutes', 'seconds'] as const).map((k) => (
        <div key={k} className="flex flex-col items-center">
          <div
            className="rounded-xl w-16 sm:w-20 py-3 flex items-center justify-center border"
            style={{
              background: 'hsl(42,38%,88%)',
              borderColor: 'hsl(36,45%,45%,0.4)',
              boxShadow: '0 0 0 1px hsl(42,38%,80%) inset',
            }}
          >
            <span
              className="text-3xl sm:text-4xl tabular-nums"
              style={{ fontFamily: "'Cormorant', serif", color: 'hsl(30,28%,18%)' }}
            >
              {String(t[k]).padStart(2, '0')}
            </span>
          </div>
          <span
            className="uppercase tracking-widest text-[9px] sm:text-[11px] mt-2"
            style={{ fontFamily: "'Oswald', sans-serif", color: 'hsl(36,45%,45%)' }}
          >
            {labels[k]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
