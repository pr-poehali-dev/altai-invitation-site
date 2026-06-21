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
    <div className="flex justify-center gap-2 sm:gap-4">
      {(['days', 'hours', 'minutes', 'seconds'] as const).map((k) => (
        <div key={k} className="flex flex-col items-center">
          <div className="parchment frame-gold rounded-lg w-16 sm:w-20 py-3 flex items-center justify-center">
            <span className="font-display text-3xl sm:text-4xl text-deep tabular-nums">
              {String(t[k]).padStart(2, '0')}
            </span>
          </div>
          <span className="font-cond uppercase tracking-widest text-[10px] sm:text-xs text-gold mt-2">
            {labels[k]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
