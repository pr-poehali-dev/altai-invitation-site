import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import Countdown from '@/components/Countdown';

const IMG_FIRE   = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/d71ff136-0e27-44f1-8f11-84bcc374afc7.jpg';
const IMG_COUPLE = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/cf67aa21-0239-478b-801d-dedd34d2401d.jpg';
const IMG_VALLEY = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/04be6736-f750-416e-8026-c3d5f8f53dfb.jpg';

/* ── Алтайская боковая орнаментальная полоса ── */
const SideBorder = ({ flip = false }: { flip?: boolean }) => (
  <svg
    viewBox="0 0 44 880"
    className="absolute top-0 h-full w-11 pointer-events-none"
    style={{ left: flip ? 'auto' : 0, right: flip ? 0 : 'auto', transform: flip ? 'scaleX(-1)' : 'none' }}
    preserveAspectRatio="xMidYMid slice"
  >
    <rect x="0" y="0" width="44" height="880" fill="hsl(28,35%,28%)" fillOpacity="0.10"/>
    <rect x="0" y="0" width="2.5" height="880" fill="hsl(28,40%,28%)" fillOpacity="0.65"/>
    <rect x="6" y="0" width="0.8" height="880" fill="hsl(28,35%,32%)" fillOpacity="0.3"/>
    {Array.from({length:22}).map((_,i) => {
      const y = i * 40;
      return (
        <g key={i} transform={`translate(4,${y})`}>
          <path d="M18,2 L34,18 L18,34 L2,18 Z" fill="hsl(28,38%,28%)" fillOpacity="0.20" stroke="hsl(28,38%,28%)" strokeWidth="0.7" strokeOpacity="0.45"/>
          <path d="M18,9 L25,18 L18,27 L11,18 Z" fill="hsl(28,38%,26%)" fillOpacity="0.28"/>
          <rect x="14" y="14" width="8" height="8" transform="rotate(45 18 18)" fill="hsl(28,38%,28%)" fillOpacity="0.15"/>
          <circle cx="18" cy="18" r="2" fill="hsl(28,38%,25%)" fillOpacity="0.35"/>
        </g>
      );
    })}
  </svg>
);

/* ── Летящий беркут SVG ── */
const Eagle = ({ x, y, scale = 1, opacity = 0.5 }: { x: number; y: number; scale?: number; opacity?: number }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}>
    {/* тело */}
    <ellipse cx="0" cy="0" rx="10" ry="4.5" fill="hsl(28,28%,22%)"/>
    {/* голова */}
    <ellipse cx="11" cy="-3" rx="5" ry="4" fill="hsl(28,28%,22%)"/>
    {/* клюв крючком */}
    <path d="M15,-2 Q20,-1 18,2 Q16,1 15,-2Z" fill="hsl(28,28%,18%)"/>
    {/* левое крыло вверх */}
    <path d="M-2,-2 C-14,-16 -28,-22 -44,-18 C-32,-12 -18,-6 -8,0Z" fill="hsl(28,26%,25%)"/>
    {/* перья левого крыла */}
    <path d="M-30,-19 C-28,-12 -24,-6 -18,-2" stroke="hsl(28,25%,32%)" strokeWidth="0.7" fill="none" opacity="0.7"/>
    <path d="M-38,-17 C-36,-10 -30,-4 -22,-1" stroke="hsl(28,25%,32%)" strokeWidth="0.6" fill="none" opacity="0.5"/>
    {/* правое крыло вниз */}
    <path d="M-2,2 C-10,14 -22,22 -38,26 C-28,18 -14,10 -4,4Z" fill="hsl(28,26%,25%)"/>
    {/* хвост */}
    <path d="M-10,1 C-16,6 -20,12 -18,18 C-14,10 -10,5 -10,1Z" fill="hsl(28,26%,23%)"/>
    <path d="M-11,2 C-18,8 -22,14 -21,20 C-16,12 -12,6 -11,2Z" fill="hsl(28,26%,23%)"/>
  </g>
);

/* ── Горный пейзаж SVG ── */
const Mountains = () => (
  <svg viewBox="0 0 375 320" className="absolute bottom-0 left-0 w-full" style={{height:'50%'}}
       preserveAspectRatio="xMidYMax meet">
    <defs>
      <linearGradient id="gFar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(215,14%,80%)"/>
        <stop offset="100%" stopColor="hsl(210,10%,72%)"/>
      </linearGradient>
      <linearGradient id="gMid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(200,10%,65%)"/>
        <stop offset="100%" stopColor="hsl(195,8%,56%)"/>
      </linearGradient>
      <linearGradient id="gNear" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(35,12%,54%)"/>
        <stop offset="100%" stopColor="hsl(32,14%,44%)"/>
      </linearGradient>
      <linearGradient id="gFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(30,15%,44%)"/>
        <stop offset="100%" stopColor="hsl(28,16%,34%)"/>
      </linearGradient>
      <filter id="blurFar"><feGaussianBlur stdDeviation="2.5"/></filter>
      <filter id="blurMid"><feGaussianBlur stdDeviation="1.2"/></filter>
    </defs>
    {/* Дальние горы */}
    <path d="M0,320 L0,180 C40,160 70,170 95,140 C118,114 138,128 162,96 C182,70 200,85 225,65 C248,46 268,62 292,52 C312,42 338,56 375,48 L375,320Z"
          fill="url(#gFar)" opacity="0.55" filter="url(#blurFar)"/>
    {/* Снег дальних пиков */}
    <path d="M162,96 C168,86 175,88 180,82 C175,96 164,100 162,96Z" fill="white" opacity="0.5" filter="url(#blurFar)"/>
    <path d="M225,65 C231,55 238,57 244,51 C239,65 227,68 225,65Z" fill="white" opacity="0.55" filter="url(#blurFar)"/>
    <path d="M292,52 C298,43 304,45 309,40 C305,53 293,56 292,52Z" fill="white" opacity="0.45" filter="url(#blurFar)"/>
    {/* Туман 1 */}
    <path d="M0,320 L0,220 Q188,198 375,215 L375,320Z" fill="hsl(44,38%,90%)" opacity="0.5" filter="url(#blurFar)"/>
    {/* Средние горы */}
    <path d="M0,320 L0,230 C28,215 55,224 78,200 C100,178 122,190 148,166 C168,148 188,158 210,138 C230,120 252,132 274,118 C294,106 318,116 345,108 C358,104 368,108 375,106 L375,320Z"
          fill="url(#gMid)" opacity="0.72" filter="url(#blurMid)"/>
    <path d="M148,166 C154,157 160,159 165,153 C161,166 150,170 148,166Z" fill="white" opacity="0.38"/>
    <path d="M210,138 C216,128 222,130 227,125 C223,138 212,142 210,138Z" fill="white" opacity="0.4"/>
    {/* Туман 2 */}
    <path d="M0,320 L0,262 Q188,246 375,260 L375,320Z" fill="hsl(42,34%,88%)" opacity="0.55" filter="url(#blurMid)"/>
    {/* Ближние горы */}
    <path d="M0,320 L0,275 C25,260 52,268 78,252 C102,237 126,246 152,232 C174,220 196,228 220,216 C242,205 264,212 288,202 C308,193 332,200 358,195 C365,193 371,195 375,194 L375,320Z"
          fill="url(#gNear)" opacity="0.82"/>
    {/* Передний план */}
    <path d="M0,320 L0,295 C30,284 62,290 95,280 C128,270 160,278 192,268 C224,258 256,266 288,258 C318,250 348,256 375,252 L375,320Z"
          fill="url(#gFront)" opacity="0.9"/>
    {/* Туман у подножия */}
    <path d="M0,320 L0,304 Q188,292 375,304 L375,320Z" fill="hsl(40,30%,85%)" opacity="0.65"/>
  </svg>
);

/* ── Алтайский центральный орнамент ── */
const AltaiStar = ({ size = 64 }: { size?: number }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none">
    {[0,45,90,135,180,225,270,315].map((a,i) => {
      const r1=28, r2=20, mid=a+22.5;
      const x1=32+r2*Math.cos((a-22.5)*Math.PI/180), y1=32+r2*Math.sin((a-22.5)*Math.PI/180);
      const xm=32+r1*Math.cos(a*Math.PI/180),        ym=32+r1*Math.sin(a*Math.PI/180);
      const x2=32+r2*Math.cos((a+22.5)*Math.PI/180), y2=32+r2*Math.sin((a+22.5)*Math.PI/180);
      void mid;
      return <path key={i} d={`M32,32 L${x1},${y1} Q${xm},${ym} ${x2},${y2}Z`}
               fill="hsl(28,38%,28%)" fillOpacity={i%2===0?0.5:0.28}/>;
    })}
    <path d="M32,18 L46,32 L32,46 L18,32 Z" stroke="hsl(28,38%,28%)" strokeWidth="1" fill="hsl(28,38%,28%)" fillOpacity="0.10"/>
    <path d="M32,24 L40,32 L32,40 L24,32 Z" fill="hsl(28,38%,28%)" fillOpacity="0.38"/>
    <circle cx="32" cy="32" r="4" fill="hsl(28,38%,25%)" fillOpacity="0.7"/>
  </svg>
);

/* ── Разделитель с ветками ── */
const Branch = () => (
  <svg viewBox="0 0 280 28" width={260} height={28} fill="none" stroke="hsl(28,35%,33%)">
    <path d="M140,14 L132,8 L124,14 L132,20Z" fill="hsl(28,38%,30%)" fillOpacity="0.6" strokeWidth="0"/>
    <line x1="122" y1="14" x2="14" y2="14" strokeWidth="0.8" strokeOpacity="0.4"/>
    <path d="M14,14 L22,9 M14,14 L22,19" strokeWidth="1.1" strokeOpacity="0.5"/>
    {[100,80,60,40].map(x=>(
      <g key={x}>
        <path d={`M${x},14 Q${x-5},9 ${x-9},7`} strokeWidth="0.9" strokeOpacity="0.4"/>
        <path d={`M${x},14 Q${x-5},19 ${x-9},21`} strokeWidth="0.9" strokeOpacity="0.4"/>
      </g>
    ))}
    <line x1="158" y1="14" x2="266" y2="14" strokeWidth="0.8" strokeOpacity="0.4"/>
    <path d="M266,14 L258,9 M266,14 L258,19" strokeWidth="1.1" strokeOpacity="0.5"/>
    {[180,200,220,240].map(x=>(
      <g key={x}>
        <path d={`M${x},14 Q${x+5},9 ${x+9},7`} strokeWidth="0.9" strokeOpacity="0.4"/>
        <path d={`M${x},14 Q${x+5},19 ${x+9},21`} strokeWidth="0.9" strokeOpacity="0.4"/>
      </g>
    ))}
  </svg>
);

/* ════════════════════════════════════════════════════════ */
const Index = () => {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [eagleX, setEagleX] = useState(-60);
  const [eagle2X, setEagle2X] = useState(-160);
  const [music, setMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  /* Анимация беркутов */
  useEffect(() => {
    let x1 = -60, x2 = -160;
    const id = setInterval(() => {
      x1 = x1 > 420 ? -100 : x1 + 0.4;
      x2 = x2 > 420 ? -180 : x2 + 0.25;
      setEagleX(x1);
      setEagle2X(x2);
    }, 30);
    return () => clearInterval(id);
  }, []);

  /* Открытие с задержкой для анимации */
  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => setRevealed(true), 50);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (music) { audioRef.current.pause(); setMusic(false); }
    else { audioRef.current.play().catch(()=>{}); setMusic(true); }
  };

  const C = 'hsl(28,30%,20%)';
  const GOLD = 'hsl(32,42%,38%)';
  const BG = 'linear-gradient(180deg, hsl(46,42%,94%) 0%, hsl(42,36%,88%) 50%, hsl(38,30%,82%) 100%)';

  return (
    <div style={{ fontFamily:"'Cormorant',serif", background:'hsl(42,35%,90%)' }}>

      {/* ═══ ЭКРАН 1: Стартовый ═══ */}
      {!opened && (
        <section onClick={handleOpen}
          className="fixed inset-0 z-50 cursor-pointer overflow-hidden flex flex-col"
          style={{ background: BG }}>

          <SideBorder/>
          <SideBorder flip/>

          {/* Беркуты летят */}
          <svg className="absolute top-0 left-0 w-full pointer-events-none" style={{height:'38%'}} viewBox="0 0 375 160" preserveAspectRatio="xMidYMid meet">
            <Eagle x={eagleX} y={48} scale={1.1} opacity={0.42}/>
            <Eagle x={eagle2X} y={28} scale={0.68} opacity={0.28}/>
          </svg>

          <Mountains/>

          {/* Контент */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full py-10 px-12 text-center">
            <div/>
            <div className="flex flex-col items-center gap-1">
              <AltaiStar size={52}/>
              <h1 style={{fontSize:'clamp(3rem,13vw,5.2rem)', color:C, lineHeight:1.05, marginTop:8}}>
                Аэлита
              </h1>
              <span style={{fontSize:'clamp(2rem,8vw,3rem)', color:GOLD, fontStyle:'italic', lineHeight:1}}>
                &amp;
              </span>
              <h1 style={{fontSize:'clamp(3rem,13vw,5.2rem)', color:C, lineHeight:1.05}}>
                Тузагаш
              </h1>
              <div style={{marginTop:12}}>
                <Branch/>
              </div>
              <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'clamp(0.75rem,3.2vw,0.95rem)', color:GOLD, letterSpacing:'0.05em', marginTop:8, fontWeight:400}}>
                Јӱректерди Алтай јараштырат
              </p>
              <p style={{fontFamily:"'Golos Text',sans-serif", fontSize:'11px', color:C, opacity:0.5, marginTop:2}}>
                «Алтай соединяет сердца»
              </p>
            </div>

            {/* Подпись */}
            <div className="flex flex-col items-center gap-1 animate-float">
              <span style={{fontSize:26}}>👇</span>
              <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'10px', letterSpacing:'0.22em', color:C, opacity:0.6, textTransform:'uppercase'}}>
                Экранга тийип ачыгар
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ═══ КНОПКА МУЗЫКИ ═══ */}
      {opened && (
        <button onClick={toggleMusic}
          className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full"
          style={{background:'hsl(42,35%,88%)', border:'1px solid hsl(28,35%,55%)', boxShadow:'0 2px 8px rgba(0,0,0,0.15)'}}>
          <span style={{fontSize:16}}>{music ? '🔊' : '🔇'}</span>
          <span style={{fontFamily:"'Oswald',sans-serif", fontSize:'10px', letterSpacing:'0.15em', color:C, opacity:0.7}}>
            МУЗЫКА
          </span>
        </button>
      )}
      <audio ref={audioRef} loop>
        {/* Подключи алтайскую музыку сюда */}
      </audio>

      {/* ═══ ЭКРАН 2: Стихотворение + очаг ═══ */}
      <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center px-10"
        style={{background: BG}}>
        <SideBorder/><SideBorder flip/>

        {/* Иллюстрация очага снизу */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5">
          <img src={IMG_FIRE} alt="" className="w-full h-full object-cover object-top" style={{opacity:0.5}}/>
          <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, hsl(44,40%,92%) 0%, transparent 60%)'}}/>
        </div>

        <div className="relative z-10 flex flex-col items-center" style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1)'
        }}>
          <AltaiStar size={40}/>
          <p style={{fontSize:'clamp(1.2rem,5vw,1.7rem)', color:C, lineHeight:1.9, marginTop:20, fontStyle:'italic'}}>
            Јайдыҥ јараш кӱӱнинде,<br/>
            Јаҥы кӱйген очокко,<br/>
            Јаҥарлап кожоҥ јайыгар,<br/>
            Јараш алкыштар айдыгар.
          </p>
          <Branch/>
          <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'clamp(0.85rem,3.5vw,1.05rem)', color:C, opacity:0.75, lineHeight:1.8, marginTop:8}}>
            Бистиҥ кудабыска<br/>акту јӱрегистеҥ кычырып турубыс
          </p>
          <div className="mt-6 flex flex-col items-center gap-1">
            <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'11px', color:GOLD, letterSpacing:'0.2em', textTransform:'uppercase'}}>
              Јаҥы очоктыҥ башталганы
            </p>
            <p style={{fontFamily:"'Golos Text',sans-serif", fontSize:'10px', color:C, opacity:0.45}}>
              Начало нового очага
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ЭКРАН 3: Молодожёны на фоне Алтая ═══ */}
      <section className="relative w-full h-screen overflow-hidden flex items-end justify-center">
        <img src={IMG_COUPLE} alt="" className="absolute inset-0 w-full h-full object-cover animate-pan"/>
        <div className="absolute inset-0" style={{background:'linear-gradient(to top, hsl(42,38%,90%) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)'}}/>
        <div className="relative z-10 w-full text-center pb-16 px-10">
          <AltaiStar size={36}/>
          <Branch/>
          <h2 style={{fontFamily:"'Cormorant',serif", fontSize:'clamp(2.2rem,10vw,4rem)', color:C, lineHeight:1.1, marginTop:8}}>
            Аэлита<br/>
            <span style={{color:GOLD, fontStyle:'italic', fontSize:'0.75em'}}>&amp;</span><br/>
            Тузагаш
          </h2>
        </div>
      </section>

      {/* ═══ ЭКРАН 4: Дата и время ═══ */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-10"
        style={{background: BG}}>
        <SideBorder/><SideBorder flip/>
        <div className="relative z-10 flex flex-col items-center gap-5 w-full max-w-xs">
          <AltaiStar size={44}/>
          <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'10px', letterSpacing:'0.3em', color:GOLD, textTransform:'uppercase', marginTop:4}}>
            Бу кӱнге арткан
          </p>
          <Countdown/>
          <Branch/>
          {/* Детали */}
          {[
            {icon:'Calendar', label:'14 августа 2026'},
            {icon:'Clock',    label:'16:00'},
          ].map(r=>(
            <div key={r.label} className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{border:'1px solid hsl(28,35%,50%)', color:GOLD}}>
                <Icon name={r.icon} size={18}/>
              </span>
              <span style={{fontSize:'clamp(1.3rem,6vw,2rem)', color:C}}>{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ЭКРАН 5: Карта / Место ═══ */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-10"
        style={{background: BG}}>
        <SideBorder/><SideBorder flip/>
        <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-sm">
          {/* Нарисованная иконка горы */}
          <svg viewBox="0 0 100 70" width={120} height={84} fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinejoin="round">
            <path d="M10,65 L38,20 L50,38 L65,8 L90,65Z" fill="hsl(28,28%,28%)" fillOpacity="0.12"/>
            <path d="M65,8 L58,22 L72,22Z" fill="white" fillOpacity="0.5" strokeWidth="0"/>
            <path d="M38,20 L33,30 L43,30Z" fill="white" fillOpacity="0.4" strokeWidth="0"/>
            <line x1="10" y1="65" x2="90" y2="65" strokeWidth="1" strokeOpacity="0.4"/>
          </svg>

          <AltaiStar size={36}/>

          <div>
            <p style={{fontSize:'clamp(1.5rem,7vw,2.4rem)', color:C, fontStyle:'italic', lineHeight:1.1}}>
              «Туштажу»
            </p>
            <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'clamp(0.9rem,4vw,1.2rem)', color:GOLD, letterSpacing:'0.1em', marginTop:4}}>
              кафе • Кош-Агач
            </p>
          </div>

          <Branch/>

          {/* Кнопка навигатора */}
          <a
            href="https://maps.yandex.ru/?text=Кош-Агач+кафе+Туштажу"
            target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background:'hsl(28,38%,28%)',
              color:'hsl(44,42%,92%)',
              fontFamily:"'Oswald',sans-serif",
              fontSize:'13px',
              letterSpacing:'0.15em',
              textDecoration:'none',
              boxShadow:'0 4px 16px hsla(28,38%,20%,0.25)'
            }}>
            <Icon name="Navigation" size={16}/>
            ОТКРЫТЬ В НАВИГАТОРЕ
          </a>

          <p style={{fontFamily:"'Golos Text',sans-serif", fontSize:'11px', color:C, opacity:0.45, marginTop:4}}>
            Нажми — откроется карта
          </p>
        </div>
      </section>

      {/* ═══ ЭКРАН 6: Финал / Долина ═══ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <img src={IMG_VALLEY} alt="" className="absolute inset-0 w-full h-full object-cover animate-pan"/>
        <div className="absolute inset-0" style={{background:'hsla(28,25%,15%,0.45)'}}/>
        <SideBorder/><SideBorder flip/>

        <div className="relative z-10 flex flex-col items-center text-center px-12 gap-4">
          <AltaiStar size={52}/>
          <p style={{fontFamily:"'Cormorant',serif", fontSize:'clamp(1.6rem,7vw,2.8rem)', color:'hsl(44,42%,92%)', lineHeight:1.5}}>
            Слерди сакып турубыс
          </p>
          <p style={{fontFamily:"'Golos Text',sans-serif", fontSize:'13px', color:'hsl(44,38%,88%)', opacity:0.7}}>
            Мы ждём вас
          </p>
          <Branch/>
          <div className="flex items-center gap-3 mt-2">
            <Icon name="Phone" size={18} style={{color:'hsl(44,38%,88%)'}}/>
            <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'clamp(0.9rem,4vw,1.1rem)', color:'hsl(44,38%,88%)', letterSpacing:'0.1em'}}>
              +7 (900) 000-00-00
            </p>
          </div>
          <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'10px', color:'hsl(44,35%,82%)', letterSpacing:'0.25em', opacity:0.65, marginTop:4}}>
            АЭЛИТА &amp; ТУЗАГАШ • 14.08.2026
          </p>
        </div>
      </section>

    </div>
  );
};

export default Index;
