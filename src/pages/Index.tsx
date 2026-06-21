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
          className="fixed inset-0 z-50 cursor-pointer overflow-hidden flex flex-col"
          style={{ background: 'linear-gradient(180deg, hsl(46,45%,95%) 0%, hsl(42,38%,89%) 45%, hsl(38,32%,82%) 100%)' }}
        >
          {/* ── Боковые орнаментальные полосы на весь экран ── */}
          {/* Левая полоса */}
          <svg viewBox="0 0 40 800" className="absolute top-0 left-0 h-full w-10 text-[hsl(28,38%,30%)]"
               preserveAspectRatio="none" fill="currentColor">
            {/* фон полосы */}
            <rect x="0" y="0" width="40" height="800" fillOpacity="0.10"/>
            {/* внешняя линия */}
            <rect x="0" y="0" width="3" height="800" fillOpacity="0.5"/>
            {/* внутренняя линия */}
            <rect x="6" y="0" width="1" height="800" fillOpacity="0.25"/>
            {/* повторяющийся блок ромбов 40px */}
            {Array.from({length: 20}).map((_,i) => (
              <g key={i} transform={`translate(0, ${i*40})`}>
                <path d="M20,4 L28,12 L20,20 L12,12 Z" fillOpacity="0.55"/>
                <path d="M20,20 L26,26 L20,32 L14,26 Z" fillOpacity="0.3"/>
                <rect x="15" y="23" width="10" height="10" rx="1" fillOpacity="0.08"/>
              </g>
            ))}
          </svg>
          {/* Правая полоса (зеркало) */}
          <svg viewBox="0 0 40 800" className="absolute top-0 right-0 h-full w-10 text-[hsl(28,38%,30%)] scale-x-[-1]"
               preserveAspectRatio="none" fill="currentColor">
            <rect x="0" y="0" width="40" height="800" fillOpacity="0.10"/>
            <rect x="0" y="0" width="3" height="800" fillOpacity="0.5"/>
            <rect x="6" y="0" width="1" height="800" fillOpacity="0.25"/>
            {Array.from({length: 20}).map((_,i) => (
              <g key={i} transform={`translate(0, ${i*40})`}>
                <path d="M20,4 L28,12 L20,20 L12,12 Z" fillOpacity="0.55"/>
                <path d="M20,20 L26,26 L20,32 L14,26 Z" fillOpacity="0.3"/>
                <rect x="15" y="23" width="10" height="10" rx="1" fillOpacity="0.08"/>
              </g>
            ))}
          </svg>

          {/* ── Контент ── */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full py-10 px-6 text-center">

            {/* Орлы вверху */}
            <div className="w-full flex justify-end pr-10 pt-2">
              <svg viewBox="0 0 160 80" className="w-40 h-20 text-[hsl(28,30%,38%)]" fill="currentColor">
                {/* Орёл 1 — крупный, в полёте */}
                <g fillOpacity="0.55" transform="translate(10,10)">
                  {/* тело */}
                  <ellipse cx="30" cy="22" rx="9" ry="4" transform="rotate(-8 30 22)"/>
                  {/* голова */}
                  <ellipse cx="39" cy="17" rx="4" ry="3.5" transform="rotate(-15 39 17)"/>
                  {/* клюв */}
                  <path d="M42,15 L47,17 L42,19 Z"/>
                  {/* левое крыло вверх */}
                  <path d="M28,20 Q18,8 4,4 Q12,10 18,18 Q22,14 28,20Z"/>
                  {/* правое крыло вниз */}
                  <path d="M32,24 Q22,34 8,38 Q16,30 24,26 Q27,30 32,24Z"/>
                  {/* хвост */}
                  <path d="M21,24 Q14,28 10,32 Q14,26 21,24Z"/>
                  <path d="M20,26 Q12,32 9,36 Q14,29 20,26Z"/>
                </g>
                {/* Орёл 2 — поменьше, дальше */}
                <g fillOpacity="0.35" transform="translate(90,0) scale(0.65)">
                  <ellipse cx="30" cy="22" rx="9" ry="4" transform="rotate(-8 30 22)"/>
                  <ellipse cx="39" cy="17" rx="4" ry="3.5" transform="rotate(-15 39 17)"/>
                  <path d="M42,15 L47,17 L42,19 Z"/>
                  <path d="M28,20 Q18,8 4,4 Q12,10 18,18 Q22,14 28,20Z"/>
                  <path d="M32,24 Q22,34 8,38 Q16,30 24,26 Q27,30 32,24Z"/>
                  <path d="M21,24 Q14,28 10,32 Q14,26 21,24Z"/>
                </g>
              </svg>
            </div>

            {/* Алтайский центральный узор + имена */}
            <div className="flex flex-col items-center -mt-2">
              {/* Алтайский узор «кереге» */}
              <svg viewBox="0 0 80 80" className="w-16 h-16 text-[hsl(28,38%,32%)]" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M40,4 L52,16 L64,4 L64,16 L52,28 L64,40 L52,40 L40,52 L28,40 L16,40 L28,28 L16,16 L28,4 Z" strokeOpacity="0.5"/>
                <path d="M40,14 L48,22 L40,30 L32,22 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.6"/>
                <path d="M40,30 L48,38 L40,46 L32,38 Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.4"/>
                <circle cx="40" cy="40" r="4" fill="currentColor" fillOpacity="0.3" strokeWidth="0"/>
                <path d="M40,4 L40,76 M4,40 L76,40" strokeOpacity="0.12" strokeWidth="0.8"/>
                <path d="M16,16 L64,64 M64,16 L16,64" strokeOpacity="0.08" strokeWidth="0.8"/>
              </svg>

              {/* Имена */}
              <h1 className="mt-4 leading-[1.05] text-[hsl(28,30%,18%)]"
                  style={{ fontFamily: "'Cormorant', serif", fontSize: 'clamp(3rem, 14vw, 5.5rem)' }}>
                Аэлита
              </h1>
              <span className="leading-none text-[hsl(32,42%,40%)] italic"
                    style={{ fontFamily: "'Cormorant', serif", fontSize: 'clamp(2rem, 8vw, 3.2rem)' }}>
                &amp;
              </span>
              <h1 className="leading-[1.05] text-[hsl(28,30%,18%)]"
                  style={{ fontFamily: "'Cormorant', serif", fontSize: 'clamp(3rem, 14vw, 5.5rem)' }}>
                Тузагаш
              </h1>

              {/* Ветки с ромбом */}
              <svg viewBox="0 0 260 32" className="w-64 mt-4 text-[hsl(28,35%,36%)]" fill="none" stroke="currentColor">
                {/* центральный ромб */}
                <path d="M130,16 L122,10 L114,16 L122,22 Z" fill="currentColor" fillOpacity="0.5" strokeWidth="0"/>
                {/* стрелка-линия влево */}
                <line x1="112" y1="16" x2="10" y2="16" strokeWidth="0.8" strokeOpacity="0.45"/>
                <path d="M10,16 L18,11 M10,16 L18,21" strokeWidth="1" strokeOpacity="0.5"/>
                {/* веточки влево */}
                <path d="M95,16 Q90,11 85,8" strokeWidth="0.9" strokeOpacity="0.4"/>
                <path d="M95,16 Q90,21 85,24" strokeWidth="0.9" strokeOpacity="0.4"/>
                <path d="M75,16 Q70,11 65,8" strokeWidth="0.8" strokeOpacity="0.35"/>
                <path d="M75,16 Q70,21 65,24" strokeWidth="0.8" strokeOpacity="0.35"/>
                <path d="M55,16 Q50,12 45,10" strokeWidth="0.7" strokeOpacity="0.3"/>
                <path d="M55,16 Q50,20 45,22" strokeWidth="0.7" strokeOpacity="0.3"/>
                {/* стрелка-линия вправо */}
                <line x1="148" y1="16" x2="250" y2="16" strokeWidth="0.8" strokeOpacity="0.45"/>
                <path d="M250,16 L242,11 M250,16 L242,21" strokeWidth="1" strokeOpacity="0.5"/>
                {/* веточки вправо */}
                <path d="M165,16 Q170,11 175,8" strokeWidth="0.9" strokeOpacity="0.4"/>
                <path d="M165,16 Q170,21 175,24" strokeWidth="0.9" strokeOpacity="0.4"/>
                <path d="M185,16 Q190,11 195,8" strokeWidth="0.8" strokeOpacity="0.35"/>
                <path d="M185,16 Q190,21 195,24" strokeWidth="0.8" strokeOpacity="0.35"/>
                <path d="M205,16 Q210,12 215,10" strokeWidth="0.7" strokeOpacity="0.3"/>
                <path d="M205,16 Q210,20 215,22" strokeWidth="0.7" strokeOpacity="0.3"/>
              </svg>
            </div>

            {/* Горы реалистичные снизу */}
            <div className="w-full -mb-1">
              <svg viewBox="0 0 400 160" className="w-full" preserveAspectRatio="xMidYMax meet">
                <defs>
                  <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(44,40%,92%)" stopOpacity="0"/>
                    <stop offset="100%" stopColor="hsl(40,35%,84%)" stopOpacity="0.9"/>
                  </linearGradient>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(38,20%,78%)"/>
                    <stop offset="100%" stopColor="hsl(35,18%,68%)"/>
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(36,18%,65%)"/>
                    <stop offset="100%" stopColor="hsl(33,16%,55%)"/>
                  </linearGradient>
                  <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(34,16%,55%)"/>
                    <stop offset="100%" stopColor="hsl(32,14%,45%)"/>
                  </linearGradient>
                </defs>
                {/* Дальние горы — светлые */}
                <path d="M0,160 L0,110 L30,85 L55,100 L80,70 L105,88 L135,50 L160,72 L185,42 L210,65 L240,30 L265,55 L290,35 L315,58 L340,40 L365,62 L390,45 L400,52 L400,160 Z"
                      fill="url(#g1)" opacity="0.5"/>
                {/* снег дальних пиков */}
                <path d="M135,50 L145,65 L125,65 Z" fill="white" opacity="0.45"/>
                <path d="M240,30 L252,50 L228,50 Z" fill="white" opacity="0.5"/>
                <path d="M290,35 L300,52 L280,52 Z" fill="white" opacity="0.4"/>
                {/* Средние горы */}
                <path d="M0,160 L0,125 L25,100 L55,118 L85,88 L115,108 L145,72 L170,92 L200,60 L228,80 L255,55 L280,75 L310,62 L335,78 L365,65 L390,80 L400,74 L400,160 Z"
                      fill="url(#g2)" opacity="0.65"/>
                <path d="M145,72 L155,88 L135,88 Z" fill="white" opacity="0.4"/>
                <path d="M200,60 L210,78 L190,78 Z" fill="white" opacity="0.45"/>
                <path d="M255,55 L264,72 L246,72 Z" fill="white" opacity="0.35"/>
                {/* Ближние горы — тёмные */}
                <path d="M0,160 L0,140 L35,115 L70,132 L105,108 L140,125 L175,100 L205,118 L235,95 L265,112 L295,98 L325,115 L360,104 L390,118 L400,112 L400,160 Z"
                      fill="url(#g3)" opacity="0.7"/>
                {/* Туман */}
                <rect x="0" y="120" width="400" height="40" fill="url(#mist)"/>
              </svg>

              {/* Горный значок + подпись */}
              <div className="flex flex-col items-center gap-1 mt-1 animate-float">
                <svg viewBox="0 0 44 30" className="w-10 text-[hsl(28,35%,38%)]" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <polyline points="4,26 16,8 22,16 30,4 38,26"/>
                  <line x1="4" y1="26" x2="38" y2="26" strokeWidth="1"/>
                  <path d="M22,4 L25,10 L19,10 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="0"/>
                </svg>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[hsl(28,22%,32%)]/65"
                   style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Экранга тийип ачыгар
                </p>
                <Icon name="ChevronDown" size={16} className="text-[hsl(32,40%,40%)]" />
              </div>
            </div>

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