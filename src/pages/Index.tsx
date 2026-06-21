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
          {/* ═══ БОКОВЫЕ ОРНАМЕНТЫ — алтайский плетёный бордюр на весь экран ═══ */}
          {/* Левая полоса */}
          <svg viewBox="0 0 44 880" className="absolute top-0 left-0 h-full w-11" style={{filter:'none'}}
               preserveAspectRatio="xMidYMid slice" fill="none">
            <rect x="0" y="0" width="44" height="880" fill="hsl(28,35%,28%)" fillOpacity="0.12"/>
            <rect x="0" y="0" width="2.5" height="880" fill="hsl(28,40%,30%)" fillOpacity="0.7"/>
            <rect x="40" y="0" width="1" height="880" fill="hsl(28,35%,35%)" fillOpacity="0.3"/>
            {/* Алтайский узор — повторяющийся блок 44×44: крест + ромбы */}
            {Array.from({length:22}).map((_,i)=>{
              const y = i*40;
              return (
                <g key={i} transform={`translate(4,${y})`}>
                  {/* большой ромб */}
                  <path d="M18,2 L34,18 L18,34 L2,18 Z" fill="hsl(28,38%,28%)" fillOpacity="0.22" stroke="hsl(28,38%,28%)" strokeWidth="0.8" strokeOpacity="0.5"/>
                  {/* внутренний малый ромб */}
                  <path d="M18,9 L25,18 L18,27 L11,18 Z" fill="hsl(28,38%,28%)" fillOpacity="0.3" stroke="none"/>
                  {/* четыре угловых квадратика */}
                  <rect x="14" y="14" width="8" height="8" transform="rotate(45 18 18)" fill="hsl(28,38%,28%)" fillOpacity="0.18"/>
                  {/* крестообразные линии */}
                  <line x1="18" y1="2" x2="18" y2="34" stroke="hsl(28,38%,30%)" strokeWidth="0.5" strokeOpacity="0.25"/>
                  <line x1="2" y1="18" x2="34" y2="18" stroke="hsl(28,38%,30%)" strokeWidth="0.5" strokeOpacity="0.25"/>
                </g>
              );
            })}
          </svg>
          {/* Правая полоса — зеркало */}
          <svg viewBox="0 0 44 880" className="absolute top-0 right-0 h-full w-11"
               preserveAspectRatio="xMidYMid slice" fill="none" style={{transform:'scaleX(-1)'}}>
            <rect x="0" y="0" width="44" height="880" fill="hsl(28,35%,28%)" fillOpacity="0.12"/>
            <rect x="0" y="0" width="2.5" height="880" fill="hsl(28,40%,30%)" fillOpacity="0.7"/>
            <rect x="40" y="0" width="1" height="880" fill="hsl(28,35%,35%)" fillOpacity="0.3"/>
            {Array.from({length:22}).map((_,i)=>{
              const y = i*40;
              return (
                <g key={i} transform={`translate(4,${y})`}>
                  <path d="M18,2 L34,18 L18,34 L2,18 Z" fill="hsl(28,38%,28%)" fillOpacity="0.22" stroke="hsl(28,38%,28%)" strokeWidth="0.8" strokeOpacity="0.5"/>
                  <path d="M18,9 L25,18 L18,27 L11,18 Z" fill="hsl(28,38%,28%)" fillOpacity="0.3" stroke="none"/>
                  <rect x="14" y="14" width="8" height="8" transform="rotate(45 18 18)" fill="hsl(28,38%,28%)" fillOpacity="0.18"/>
                  <line x1="18" y1="2" x2="18" y2="34" stroke="hsl(28,38%,30%)" strokeWidth="0.5" strokeOpacity="0.25"/>
                  <line x1="2" y1="18" x2="34" y2="18" stroke="hsl(28,38%,30%)" strokeWidth="0.5" strokeOpacity="0.25"/>
                </g>
              );
            })}
          </svg>

          {/* ═══ ГОРЫ — многослойный реалистичный пейзаж, нижняя половина ═══ */}
          <svg viewBox="0 0 375 480" className="absolute bottom-0 left-0 w-full" style={{height:'58%'}}
               preserveAspectRatio="xMidYMax meet">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(44,42%,93%)" stopOpacity="0"/>
                <stop offset="100%" stopColor="hsl(38,30%,84%)" stopOpacity="0.8"/>
              </linearGradient>
              <linearGradient id="far" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(220,12%,82%)"/>
                <stop offset="100%" stopColor="hsl(210,10%,75%)"/>
              </linearGradient>
              <linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(200,8%,70%)"/>
                <stop offset="100%" stopColor="hsl(195,8%,60%)"/>
              </linearGradient>
              <linearGradient id="near" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(35,12%,58%)"/>
                <stop offset="100%" stopColor="hsl(32,14%,48%)"/>
              </linearGradient>
              <linearGradient id="front" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(30,15%,48%)"/>
                <stop offset="100%" stopColor="hsl(28,16%,38%)"/>
              </linearGradient>
              <filter id="blur1"><feGaussianBlur stdDeviation="2"/></filter>
              <filter id="blur2"><feGaussianBlur stdDeviation="1"/></filter>
            </defs>

            {/* Слой 1: самые дальние горы — почти белые, размытые */}
            <path d="M0,480 L0,260 C30,240 50,255 70,220 C90,185 110,200 135,160 C155,128 170,145 195,110 C215,82 235,100 260,75 C280,55 300,72 320,60 C340,45 360,58 375,52 L375,480 Z"
                  fill="url(#far)" opacity="0.6" filter="url(#blur1)"/>
            {/* Снег дальних пиков */}
            <path d="M135,160 C142,150 148,152 155,145 C150,158 140,162 135,160Z" fill="white" opacity="0.55" filter="url(#blur1)"/>
            <path d="M195,110 C202,100 210,102 218,96 C212,112 200,116 195,110Z" fill="white" opacity="0.6" filter="url(#blur1)"/>
            <path d="M260,75 C267,65 274,67 280,62 C275,76 263,79 260,75Z" fill="white" opacity="0.5" filter="url(#blur1)"/>

            {/* Туман между слоями 1 и 2 */}
            <path d="M0,480 L0,310 Q95,280 190,295 Q285,310 375,290 L375,480Z"
                  fill="hsl(44,38%,90%)" opacity="0.45" filter="url(#blur1)"/>

            {/* Слой 2: средние горы */}
            <path d="M0,480 L0,320 C20,305 45,315 65,285 C85,258 105,270 130,240 C150,216 170,228 195,200 C215,178 238,190 258,168 C278,148 298,162 322,148 C342,136 360,150 375,144 L375,480 Z"
                  fill="url(#mid)" opacity="0.7" filter="url(#blur2)"/>
            <path d="M130,240 C137,230 144,232 150,226 C145,240 133,244 130,240Z" fill="white" opacity="0.4"/>
            <path d="M258,168 C264,158 270,160 276,155 C272,168 260,172 258,168Z" fill="white" opacity="0.38"/>

            {/* Туман между слоями 2 и 3 */}
            <path d="M0,480 L0,360 Q95,340 190,352 Q285,365 375,348 L375,480Z"
                  fill="hsl(44,35%,88%)" opacity="0.5" filter="url(#blur2)"/>

            {/* Слой 3: ближние горы */}
            <path d="M0,480 L0,375 C22,358 48,368 72,345 C96,322 118,336 145,312 C165,294 188,306 212,285 C232,267 255,278 278,260 C298,244 320,255 345,242 C360,234 370,240 375,238 L375,480 Z"
                  fill="url(#near)" opacity="0.8"/>
            <path d="M145,312 C152,302 158,304 164,298 C160,312 148,316 145,312Z" fill="white" opacity="0.3"/>

            {/* Слой 4: передние холмы — самые тёмные */}
            <path d="M0,480 L0,420 C30,405 60,415 90,400 C120,386 150,396 180,382 C210,368 240,378 270,368 C300,356 330,366 360,358 C368,355 372,357 375,356 L375,480 Z"
                  fill="url(#front)" opacity="0.85"/>

            {/* Туман у подножия */}
            <path d="M0,480 L0,440 Q190,420 375,438 L375,480Z"
                  fill="hsl(42,32%,86%)" opacity="0.6"/>
          </svg>

          {/* ═══ КОНТЕНТ ═══ */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full py-10 px-14 text-center">

            {/* Орлы — вверху справа, красивые силуэты */}
            <div className="w-full flex justify-end -mt-1">
              <svg viewBox="0 0 180 100" className="w-44 h-24" fill="none">
                {/* Орёл 1 крупный */}
                <g opacity="0.45">
                  {/* тело обтекаемое */}
                  <path d="M95,42 C98,36 104,34 108,36 C112,38 112,44 108,46 C104,48 98,46 95,42Z"
                        fill="hsl(28,30%,25%)"/>
                  {/* голова с клювом */}
                  <path d="M108,36 C113,32 118,33 120,36 C122,39 119,42 115,41 C111,40 108,38 108,36Z"
                        fill="hsl(28,30%,25%)"/>
                  <path d="M120,36 L128,38 L121,40Z" fill="hsl(28,30%,20%)"/>
                  {/* левое крыло — широкое, загнутое */}
                  <path d="M100,40 C90,32 74,20 55,12 C48,9 40,8 35,10 C50,18 64,26 74,34 C80,38 88,40 95,42Z"
                        fill="hsl(28,28%,28%)"/>
                  {/* перья левого крыла */}
                  <path d="M55,12 C52,18 56,24 60,28" stroke="hsl(28,25%,35%)" strokeWidth="0.8" fill="none" opacity="0.6"/>
                  <path d="M45,12 C42,18 46,24 50,28" stroke="hsl(28,25%,35%)" strokeWidth="0.7" fill="none" opacity="0.5"/>
                  {/* правое крыло — опущено вниз */}
                  <path d="M100,44 C92,52 78,62 62,70 C55,73 48,74 44,72 C58,64 72,56 82,48 C88,44 94,42 100,44Z"
                        fill="hsl(28,28%,28%)"/>
                  {/* перья правого крыла */}
                  <path d="M62,70 C60,64 64,58 68,54" stroke="hsl(28,25%,35%)" strokeWidth="0.8" fill="none" opacity="0.6"/>
                  {/* хвост */}
                  <path d="M94,44 C88,50 82,56 78,62 C82,54 88,48 94,44Z" fill="hsl(28,28%,26%)"/>
                  <path d="M92,46 C85,53 80,59 76,65 C80,57 86,51 92,46Z" fill="hsl(28,28%,26%)"/>
                </g>

                {/* Орёл 2 — маленький, вдали */}
                <g opacity="0.28" transform="translate(20,-8) scale(0.5)">
                  <path d="M95,42 C98,36 104,34 108,36 C112,38 112,44 108,46 C104,48 98,46 95,42Z" fill="hsl(28,30%,30%)"/>
                  <path d="M108,36 C113,32 118,33 120,36 C122,39 119,42 115,41 C111,40 108,38 108,36Z" fill="hsl(28,30%,30%)"/>
                  <path d="M120,36 L128,38 L121,40Z" fill="hsl(28,30%,25%)"/>
                  <path d="M100,40 C90,32 74,20 55,12 C48,9 40,8 35,10 C50,18 64,26 74,34 C80,38 88,40 95,42Z" fill="hsl(28,28%,32%)"/>
                  <path d="M100,44 C92,52 78,62 62,70 C55,73 48,74 44,72 C58,64 72,56 82,48 C88,44 94,42 100,44Z" fill="hsl(28,28%,32%)"/>
                  <path d="M94,44 C88,50 82,56 78,62 C82,54 88,48 94,44Z" fill="hsl(28,28%,28%)"/>
                </g>
              </svg>
            </div>

            {/* Алтайский узор + имена */}
            <div className="flex flex-col items-center">
              {/* Узор — алтайский «солнечный» мотив */}
              <svg viewBox="0 0 72 72" className="w-14 h-14 mb-3" fill="none">
                {/* внешнее кольцо с лепестками */}
                {[0,45,90,135,180,225,270,315].map((a,i)=>(
                  <path key={i}
                    d={`M36,36 L${36+20*Math.cos((a-22.5)*Math.PI/180)},${36+20*Math.sin((a-22.5)*Math.PI/180)} Q${36+26*Math.cos(a*Math.PI/180)},${36+26*Math.sin(a*Math.PI/180)} ${36+20*Math.cos((a+22.5)*Math.PI/180)},${36+20*Math.sin((a+22.5)*Math.PI/180)} Z`}
                    fill="hsl(28,38%,30%)" fillOpacity={i%2===0?0.45:0.25}/>
                ))}
                {/* средний ромб */}
                <path d="M36,22 L50,36 L36,50 L22,36 Z" stroke="hsl(28,38%,30%)" strokeWidth="1.2" fill="hsl(28,38%,30%)" fillOpacity="0.12"/>
                {/* внутренний крест */}
                <path d="M36,28 L44,36 L36,44 L28,36 Z" fill="hsl(28,38%,30%)" fillOpacity="0.35"/>
                <circle cx="36" cy="36" r="4" fill="hsl(28,38%,28%)" fillOpacity="0.6"/>
              </svg>

              <h1 style={{ fontFamily:"'Cormorant',serif", fontSize:'clamp(3rem,13vw,5.2rem)', color:'hsl(28,30%,18%)', lineHeight:1.05 }}>
                Аэлита
              </h1>
              <span style={{ fontFamily:"'Cormorant',serif", fontSize:'clamp(1.8rem,7vw,3rem)', color:'hsl(32,40%,38%)', fontStyle:'italic', lineHeight:1.1 }}>
                &amp;
              </span>
              <h1 style={{ fontFamily:"'Cormorant',serif", fontSize:'clamp(3rem,13vw,5.2rem)', color:'hsl(28,30%,18%)', lineHeight:1.05 }}>
                Тузагаш
              </h1>

              {/* Ветки с ромбом */}
              <svg viewBox="0 0 280 28" className="w-64 mt-5" fill="none" stroke="hsl(28,35%,33%)">
                <path d="M140,14 L132,8 L124,14 L132,20 Z" fill="hsl(28,38%,32%)" fillOpacity="0.6" strokeWidth="0"/>
                <line x1="122" y1="14" x2="14" y2="14" strokeWidth="0.8" strokeOpacity="0.4"/>
                <path d="M14,14 L22,9 M14,14 L22,19" strokeWidth="1.2" strokeOpacity="0.5"/>
                {[100,80,60,40].map(x=>(
                  <g key={x}>
                    <path d={`M${x},14 Q${x-6},9 ${x-10},7`} strokeWidth="0.9" strokeOpacity="0.4"/>
                    <path d={`M${x},14 Q${x-6},19 ${x-10},21`} strokeWidth="0.9" strokeOpacity="0.4"/>
                  </g>
                ))}
                <line x1="158" y1="14" x2="266" y2="14" strokeWidth="0.8" strokeOpacity="0.4"/>
                <path d="M266,14 L258,9 M266,14 L258,19" strokeWidth="1.2" strokeOpacity="0.5"/>
                {[180,200,220,240].map(x=>(
                  <g key={x}>
                    <path d={`M${x},14 Q${x+6},9 ${x+10},7`} strokeWidth="0.9" strokeOpacity="0.4"/>
                    <path d={`M${x},14 Q${x+6},19 ${x+10},21`} strokeWidth="0.9" strokeOpacity="0.4"/>
                  </g>
                ))}
              </svg>
            </div>

            {/* Подпись снизу */}
            <div className="flex flex-col items-center gap-1 pb-2 animate-float">
              <svg viewBox="0 0 48 34" className="w-11 mb-1" fill="none" stroke="hsl(28,35%,36%)" strokeWidth="1.6">
                <path d="M4,30 C10,22 16,14 22,10 C26,7 28,9 30,14 C32,9 36,4 42,2 C46,6 48,10 44,30" strokeLinejoin="round"/>
                <path d="M4,30 L44,30" strokeWidth="1"/>
                <path d="M22,10 L18,16 L26,16 Z" fill="hsl(28,35%,36%)" fillOpacity="0.35" strokeWidth="0"/>
              </svg>
              <p style={{ fontFamily:"'Oswald',sans-serif", fontSize:'10px', letterSpacing:'0.22em', color:'hsl(28,22%,32%)', opacity:0.65, textTransform:'uppercase' }}>
                Экранга тийип ачыгар
              </p>
              <Icon name="ChevronDown" size={16} className="text-[hsl(32,40%,40%)]" />
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