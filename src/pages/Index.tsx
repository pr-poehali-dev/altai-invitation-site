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
          style={{ background: 'linear-gradient(180deg, hsl(44,40%,93%) 0%, hsl(40,35%,86%) 60%, hsl(38,32%,80%) 100%)' }}
        >
          {/* ── Угловые плетёные орнаменты ── */}
          {/* Верх-лево */}
          <svg viewBox="0 0 90 90" className="absolute top-0 left-0 w-24 h-24 text-[hsl(30,35%,38%)]" fill="currentColor">
            <path d="M0,0 L90,0 L90,12 L12,12 L12,90 L0,90 Z" fillOpacity="0.18"/>
            <path d="M0,0 L24,0 L24,4 L4,4 L4,24 L0,24 Z" fillOpacity="0.5"/>
            <rect x="6" y="6" width="14" height="14" rx="1" fillOpacity="0.12"/>
            <path d="M14,2 L22,10 L14,18 L6,10 Z" fillOpacity="0.35"/>
            <path d="M28,2 L34,8 L28,14 L22,8 Z" fillOpacity="0.25"/>
            <path d="M2,28 L8,34 L2,40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
            <path d="M8,2 L8,20 M2,8 L20,8" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
            {/* Плетёный квадратный узор */}
            <path d="M16,30 L22,24 L28,30 L22,36 Z" fillOpacity="0.2"/>
            <path d="M30,16 L36,10 L42,16 L36,22 Z" fillOpacity="0.2"/>
          </svg>
          {/* Верх-право */}
          <svg viewBox="0 0 90 90" className="absolute top-0 right-0 w-24 h-24 text-[hsl(30,35%,38%)] scale-x-[-1]" fill="currentColor">
            <path d="M0,0 L90,0 L90,12 L12,12 L12,90 L0,90 Z" fillOpacity="0.18"/>
            <path d="M0,0 L24,0 L24,4 L4,4 L4,24 L0,24 Z" fillOpacity="0.5"/>
            <rect x="6" y="6" width="14" height="14" rx="1" fillOpacity="0.12"/>
            <path d="M14,2 L22,10 L14,18 L6,10 Z" fillOpacity="0.35"/>
            <path d="M28,2 L34,8 L28,14 L22,8 Z" fillOpacity="0.25"/>
            <path d="M2,28 L8,34 L2,40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
            <path d="M8,2 L8,20 M2,8 L20,8" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
            <path d="M16,30 L22,24 L28,30 L22,36 Z" fillOpacity="0.2"/>
            <path d="M30,16 L36,10 L42,16 L36,22 Z" fillOpacity="0.2"/>
          </svg>
          {/* Низ-лево */}
          <svg viewBox="0 0 90 90" className="absolute bottom-0 left-0 w-24 h-24 text-[hsl(30,35%,38%)] scale-y-[-1]" fill="currentColor">
            <path d="M0,0 L90,0 L90,12 L12,12 L12,90 L0,90 Z" fillOpacity="0.18"/>
            <path d="M0,0 L24,0 L24,4 L4,4 L4,24 L0,24 Z" fillOpacity="0.5"/>
            <rect x="6" y="6" width="14" height="14" rx="1" fillOpacity="0.12"/>
            <path d="M14,2 L22,10 L14,18 L6,10 Z" fillOpacity="0.35"/>
            <path d="M28,2 L34,8 L28,14 L22,8 Z" fillOpacity="0.25"/>
            <path d="M2,28 L8,34 L2,40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
            <path d="M8,2 L8,20 M2,8 L20,8" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
            <path d="M16,30 L22,24 L28,30 L22,36 Z" fillOpacity="0.2"/>
            <path d="M30,16 L36,10 L42,16 L36,22 Z" fillOpacity="0.2"/>
          </svg>
          {/* Низ-право */}
          <svg viewBox="0 0 90 90" className="absolute bottom-0 right-0 w-24 h-24 text-[hsl(30,35%,38%)] scale-[-1]" fill="currentColor">
            <path d="M0,0 L90,0 L90,12 L12,12 L12,90 L0,90 Z" fillOpacity="0.18"/>
            <path d="M0,0 L24,0 L24,4 L4,4 L4,24 L0,24 Z" fillOpacity="0.5"/>
            <rect x="6" y="6" width="14" height="14" rx="1" fillOpacity="0.12"/>
            <path d="M14,2 L22,10 L14,18 L6,10 Z" fillOpacity="0.35"/>
            <path d="M28,2 L34,8 L28,14 L22,8 Z" fillOpacity="0.25"/>
            <path d="M2,28 L8,34 L2,40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
            <path d="M8,2 L8,20 M2,8 L20,8" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
            <path d="M16,30 L22,24 L28,30 L22,36 Z" fillOpacity="0.2"/>
            <path d="M30,16 L36,10 L42,16 L36,22 Z" fillOpacity="0.2"/>
          </svg>

          {/* ── Контент по центру ── */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full py-10 px-8 text-center">

            {/* Птицы вверху справа */}
            <div className="self-end mr-8 mt-2">
              <svg viewBox="0 0 80 30" className="w-24 text-[hsl(30,30%,40%)]/40" fill="currentColor">
                <path d="M5,15 Q10,8 15,15 Q10,12 5,15Z"/>
                <path d="M18,10 Q24,2 30,10 Q24,6 18,10Z"/>
                <path d="M55,12 Q61,4 67,12 Q61,8 55,12Z"/>
                <path d="M70,17 Q75,11 80,17 Q75,14 70,17Z"/>
              </svg>
            </div>

            {/* Звезда-узел алтайский */}
            <div className="flex flex-col items-center -mt-4">
              <svg viewBox="0 0 64 64" className="w-14 h-14 text-[hsl(30,38%,35%)]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M32 4 L38 20 L54 14 L44 28 L60 32 L44 36 L54 50 L38 44 L32 60 L26 44 L10 50 L20 36 L4 32 L20 28 L10 14 L26 20 Z"/>
                <circle cx="32" cy="32" r="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M32 26 L35 29 L32 32 L29 29 Z" fill="currentColor" fillOpacity="0.4"/>
              </svg>

              {/* Имена */}
              <h1 className="mt-5 text-[clamp(3.2rem,12vw,5.5rem)] leading-[1.05] text-[hsl(30,28%,20%)]"
                  style={{ fontFamily: "'Cormorant', serif" }}>
                Аэлита
              </h1>
              <span className="text-[clamp(2rem,7vw,3rem)] text-[hsl(34,40%,42%)] italic leading-none"
                    style={{ fontFamily: "'Cormorant', serif" }}>
                &amp;
              </span>
              <h1 className="text-[clamp(3.2rem,12vw,5.5rem)] leading-[1.05] text-[hsl(30,28%,20%)]"
                  style={{ fontFamily: "'Cormorant', serif" }}>
                Тузагаш
              </h1>

              {/* Ветки-разделитель */}
              <div className="mt-5">
                <svg viewBox="0 0 220 28" className="w-56 text-[hsl(30,35%,38%)]" fill="currentColor">
                  <path d="M110,14 L104,10 L98,14 L104,18 Z" fillOpacity="0.7"/>
                  {/* левая ветка */}
                  <path d="M100,14 Q85,14 72,10 M85,14 Q80,10 76,6 M85,14 Q80,18 76,22 M92,14 Q88,10 84,7 M92,14 Q88,18 84,21"
                        fill="none" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.55"/>
                  <path d="M72,10 Q58,12 44,14 M58,12 Q53,8 49,5 M58,12 Q53,16 49,19 M65,11 Q61,8 57,5"
                        fill="none" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4"/>
                  {/* стрелка лево */}
                  <path d="M44,14 L30,14 M30,14 L36,10 M30,14 L36,18"
                        fill="none" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.5"/>
                  {/* правая ветка (зеркало) */}
                  <path d="M120,14 Q135,14 148,10 M135,14 Q140,10 144,6 M135,14 Q140,18 144,22 M128,14 Q132,10 136,7 M128,14 Q132,18 136,21"
                        fill="none" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.55"/>
                  <path d="M148,10 Q162,12 176,14 M162,12 Q167,8 171,5 M162,12 Q167,16 171,19 M155,11 Q159,8 163,5"
                        fill="none" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4"/>
                  {/* стрелка право */}
                  <path d="M176,14 L190,14 M190,14 L184,10 M190,14 L184,18"
                        fill="none" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.5"/>
                </svg>
              </div>
            </div>

            {/* Горы снизу */}
            <div className="w-full flex flex-col items-center gap-3">
              <svg viewBox="0 0 400 120" className="w-full text-[hsl(38,28%,72%)]" preserveAspectRatio="none">
                {/* дальние горы */}
                <polygon points="0,120 60,55 100,75 150,30 200,60 260,20 320,55 370,35 400,50 400,120" fill="currentColor" fillOpacity="0.35"/>
                {/* ближние горы */}
                <polygon points="0,120 40,80 80,95 130,60 180,85 230,50 290,75 340,58 400,70 400,120" fill="currentColor" fillOpacity="0.55"/>
                {/* снег на пиках */}
                <polygon points="150,30 158,45 142,45 Z" fill="white" fillOpacity="0.5"/>
                <polygon points="260,20 270,38 250,38 Z" fill="white" fillOpacity="0.5"/>
                <polygon points="370,35 378,50 362,50 Z" fill="white" fillOpacity="0.45"/>
              </svg>

              {/* Горный значок + подпись */}
              <div className="flex flex-col items-center gap-1 -mt-2 animate-float">
                <svg viewBox="0 0 40 28" className="w-10 text-[hsl(30,35%,40%)]" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="4,24 14,8 20,16 28,4 36,24"/>
                  <line x1="4" y1="24" x2="36" y2="24"/>
                </svg>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[hsl(30,25%,35%)]/70"
                   style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Экранга тийип ачыгар
                </p>
                <Icon name="ChevronDown" size={16} className="text-[hsl(34,40%,42%)]" />
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