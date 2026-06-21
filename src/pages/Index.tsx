import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Countdown from '@/components/Countdown';

/* ── Картинки ── */
const IMG_SLIDE1 = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/bucket/f5cf4882-13ce-42ce-93e3-907d1c2de5fc.jpg';
const IMG_FIRE   = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/d71ff136-0e27-44f1-8f11-84bcc374afc7.jpg';
const IMG_COUPLE = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/cf67aa21-0239-478b-801d-dedd34d2401d.jpg';
const IMG_VALLEY = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/04be6736-f750-416e-8026-c3d5f8f53dfb.jpg';

/* ── SVG-орнаменты из эскиза ── */

/* Алтайский ромб-узел (центральный) */
const Knot = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="16" y="4" width="16" height="16" transform="rotate(45 24 12)" />
    <rect x="16" y="28" width="16" height="16" transform="rotate(45 24 36)" />
    <rect x="4"  y="16" width="16" height="16" transform="rotate(45 12 24)" />
    <rect x="28" y="16" width="16" height="16" transform="rotate(45 36 24)" />
    <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
  </svg>
);

/* Угловой орнамент из эскиза */
const Corner = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M4 4 H20 V8 H8 V20 H4 Z" />
    <rect x="10" y="10" width="8" height="8" transform="rotate(45 14 14)" />
    <path d="M4 4 L14 14" />
  </svg>
);

/* Полоска-разделитель с ромбом */
const Sep = ({ light = false }: { light?: boolean }) => {
  const c = light ? 'bg-[hsl(var(--parch))]/60' : 'bg-[hsl(var(--gold))]/60';
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <span className={`h-px w-14 ${c}`} />
      <svg viewBox="0 0 12 12" className={`w-3 h-3 ${light ? 'text-[hsl(var(--parch))]' : 'text-gold'}`} fill="currentColor">
        <polygon points="6,0 12,6 6,12 0,6" />
      </svg>
      <span className={`h-px w-14 ${c}`} />
    </div>
  );
};

/* Четыре угловых орнамента */
const Corners = ({ light = false }: { light?: boolean }) => {
  const c = light ? 'text-[hsl(var(--parch))]/50' : 'text-[hsl(var(--gold))]/55';
  return (
    <>
      <Corner className={`absolute top-4 left-4 w-14 h-14 ${c}`} />
      <Corner className={`absolute top-4 right-4 w-14 h-14 ${c} -scale-x-100`} />
      <Corner className={`absolute bottom-4 left-4 w-14 h-14 ${c} -scale-y-100`} />
      <Corner className={`absolute bottom-4 right-4 w-14 h-14 ${c} scale-[-1]`} />
    </>
  );
};

/* Птицы SVG (декоративные, как на эскизе) */
const Birds = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 120 40" className={className} fill="currentColor">
    <path d="M10 20 Q14 14 18 20 Q14 18 10 20Z" />
    <path d="M22 15 Q27 8 32 15 Q27 12 22 15Z" />
    <path d="M38 22 Q42 16 46 22 Q42 20 38 22Z" />
    <path d="M70 18 Q75 11 80 18 Q75 15 70 18Z" />
    <path d="M85 12 Q90 5 95 12 Q90 9 85 12Z" />
  </svg>
);

/* Горный силуэт (как на эскизе слайда 1) */
const Mountains = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 200 80" className={className} fill="currentColor">
    <polygon points="0,80 40,30 60,50 90,10 120,45 150,20 180,40 200,80" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════ */
const Index = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ fontFamily: "'Cormorant', serif" }}
         className="bg-[hsl(var(--parch))] text-[hsl(var(--deep))]">

      {/* ══ СЛАЙД 1: Стартовый ══ */}
      {!opened && (
        <section
          onClick={() => setOpened(true)}
          className="fixed inset-0 z-50 cursor-pointer overflow-hidden"
        >
          <img
            src={IMG_SLIDE1}
            alt=""
            className="absolute inset-0 w-full h-full object-contain object-center"
            style={{ background: 'hsl(42,35%,90%)' }}
          />
          {/* Только подпись снизу */}
          <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1 animate-float z-10">
            <p className="text-[11px] uppercase tracking-widest text-[hsl(30,25%,28%)]/70"
               style={{ fontFamily: "'Oswald', sans-serif" }}>
              Экранга тийип ачыгар
            </p>
            <Icon name="ChevronDown" size={18} className="text-[hsl(36,42%,42%)]" />
          </div>
        </section>
      )}

      {/* ══ СЛАЙД 2: Благопожелание + костёр ══ */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, hsl(42,38%,93%) 0%, hsl(38,30%,85%) 100%)' }}
      >
        <Corners />
        {/* Иллюстрация костра занимает нижнюю часть */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%]">
          <img src={IMG_FIRE} alt="" className="w-full h-full object-cover object-top opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(42,38%,93%)]/0 via-transparent to-[hsl(42,38%,93%)]" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <Knot className="w-8 h-8 text-[hsl(var(--gold))] mb-8" />
          <p className="text-xl sm:text-3xl leading-relaxed text-[hsl(var(--deep))] max-w-sm">
            Јайдыҥ јараш кӱнинде,<br />
            Јаҥы кӱйген очокко,<br />
            Јаҥарлап кожоҥ јайыгар,<br />
            Јараш алкыштар айдыгар.
          </p>
          <Sep />
          <p className="text-base sm:text-xl leading-relaxed text-[hsl(var(--deep))]/75"
             style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.04em' }}>
            Бистиҥ кудабыска<br />акту јӱрегистеҥ<br />кычырып турубыс
          </p>
        </div>
      </section>

      {/* ══ СЛАЙД 3: Пара в национальных костюмах ══ */}
      <section className="relative w-full h-screen overflow-hidden flex items-end justify-center">
        <img src={IMG_COUPLE} alt="" className="absolute inset-0 w-full h-full object-cover animate-pan" />
        {/* Градиент снизу, как на эскизе — белая арка с именами */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(42,38%,92%)] via-[hsl(42,38%,92%)]/10 to-transparent" />

        {/* Арочный блок с именами внизу */}
        <div className="relative z-10 w-full pb-0">
          <div
            className="mx-auto w-[82%] sm:w-[70%] text-center pt-8 pb-10 px-8 rounded-t-full"
            style={{ background: 'hsl(42,38%,92%)', boxShadow: '0 -4px 30px hsla(36,30%,30%,0.12)' }}
          >
            <Knot className="w-7 h-7 text-[hsl(var(--gold))] mx-auto mb-3" />
            <Sep />
            <h2 className="text-4xl sm:text-5xl leading-tight text-[hsl(var(--deep))]">
              Аэлита<br />
              <span className="text-[hsl(var(--gold))] italic text-3xl">&amp;</span><br />
              Тузагаш
            </h2>
          </div>
        </div>
      </section>

      {/* ══ СЛАЙД 4: Текст приглашения ══ */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center text-center px-8"
        style={{ background: 'linear-gradient(160deg, hsl(42,38%,93%) 0%, hsl(38,30%,85%) 100%)' }}
      >
        <Corners />
        <div className="flex flex-col items-center gap-0 max-w-sm">
          {/* стрелки с ромбами как на эскизе */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 bg-[hsl(var(--gold))]/50" />
            <Knot className="w-6 h-6 text-[hsl(var(--gold))]" />
            <span className="h-px w-10 bg-[hsl(var(--gold))]/50" />
          </div>

          {/* Ветви-листья (имитация декора эскиза) */}
          <div className="text-[hsl(var(--gold))]/40 text-5xl mb-4 leading-none select-none">❧</div>

          <p className="text-xl sm:text-2xl leading-relaxed text-[hsl(var(--deep))]">
            Бистиҥ кудабыска<br />
            акту јӱрегистеҥ<br />
            кычырып турубыс
          </p>

          <div className="text-[hsl(var(--gold))]/40 text-5xl mt-4 leading-none select-none rotate-180">❧</div>

          <Sep />

          {/* Стрелки снизу */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[hsl(var(--gold))]/50" />
            <Knot className="w-6 h-6 text-[hsl(var(--gold))]" />
            <span className="h-px w-10 bg-[hsl(var(--gold))]/50" />
          </div>
        </div>
      </section>

      {/* ══ СЛАЙД 5: О событии + обратный отсчёт ══ */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center text-center px-8"
        style={{ background: 'linear-gradient(160deg, hsl(42,38%,93%) 0%, hsl(38,30%,85%) 100%)' }}
      >
        <Corners />
        {/* Горный значок сверху как на эскизе */}
        <Mountains className="w-20 text-[hsl(var(--deep))]/20 mb-2" />
        <Sep />

        {/* Детали события */}
        <div className="space-y-5 text-left w-full max-w-xs mb-6">
          {[
            { icon: 'Calendar', text: '14.08.2026' },
            { icon: 'Clock',    text: '16:00' },
            { icon: 'MapPin',   text: '«Туштажу» кафе' },
            { icon: 'Mountain', text: 'Кош-Агач' },
          ].map((row) => (
            <div key={row.text} className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full border border-[hsl(var(--gold))]/50 flex items-center justify-center text-[hsl(var(--gold))] shrink-0">
                <Icon name={row.icon} size={18} />
              </span>
              <span className="text-xl sm:text-2xl text-[hsl(var(--deep))]">{row.text}</span>
            </div>
          ))}
        </div>

        <Sep />
        {/* Отсчёт */}
        <p className="uppercase tracking-[0.3em] text-[10px] text-[hsl(var(--gold))] mb-4"
           style={{ fontFamily: "'Oswald', sans-serif" }}>
          Бу кӱнге арткан
        </p>
        <Countdown />
      </section>

      {/* ══ СЛАЙД 6: Долина с орлами (финал) ══ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <img src={IMG_VALLEY} alt="" className="absolute inset-0 w-full h-full object-cover animate-pan" />
        <div className="absolute inset-0 bg-[hsl(var(--deep))]/35" />
        <Corners light />

        {/* Орнамент внизу по центру как на эскизе */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <Knot className="w-10 h-10 text-[hsl(var(--parch))]/70 animate-float" />
        </div>
      </section>

    </div>
  );
};

export default Index;