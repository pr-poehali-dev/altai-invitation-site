import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import Countdown from '@/components/Countdown';

const IMG_NIGHT   = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/09695477-da83-43f3-a1fb-138d5ad5600d.jpg';
const IMG_COUPLE  = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/47b96426-c610-4297-833d-dbbec2f22a11.jpg';
const IMG_VALLEY  = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/04be6736-f750-416e-8026-c3d5f8f53dfb.jpg';

/* ── Золотой алтайский орнамент-звезда ── */
const Star = ({ size = 56 }: { size?: number }) => {
  const pts = Array.from({length:8},(_,i)=>{
    const a = (i*45)*Math.PI/180;
    const r = i%2===0 ? size/2-4 : size/2-14;
    return `${size/2+r*Math.cos(a-Math.PI/2)},${size/2+r*Math.sin(a-Math.PI/2)}`;
  }).join(' ');
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <polygon points={pts} fill="none" stroke="hsl(42,75%,58%)" strokeWidth="1.2" strokeOpacity="0.9"/>
      <polygon points={pts} fill="hsl(42,75%,58%)" fillOpacity="0.08"/>
      {/* внутренний ромб */}
      <path d={`M${size/2},${size/2-10} L${size/2+10},${size/2} L${size/2},${size/2+10} L${size/2-10},${size/2}Z`}
        fill="none" stroke="hsl(42,75%,58%)" strokeWidth="1" strokeOpacity="0.7"/>
      <circle cx={size/2} cy={size/2} r="3.5" fill="hsl(42,75%,65%)" fillOpacity="0.85"/>
    </svg>
  );
};

/* ── Золотой разделитель ── */
const Divider = ({ light = false }: { light?: boolean }) => {
  const col = light ? 'hsl(42,60%,72%)' : 'hsl(42,75%,58%)';
  return (
    <div style={{display:'flex', alignItems:'center', gap:10, margin:'12px 0'}}>
      <span style={{height:1, width:48, background:`linear-gradient(to right, transparent, ${col})`, display:'block'}}/>
      <svg width="14" height="14" viewBox="0 0 14 14" fill={col}>
        <polygon points="7,0 14,7 7,14 0,7"/>
      </svg>
      <span style={{height:1, width:48, background:`linear-gradient(to left, transparent, ${col})`, display:'block'}}/>
    </div>
  );
};

/* ── Боковые орнаменты ── */
const Side = ({ right = false }: { right?: boolean }) => (
  <svg viewBox="0 0 32 800" preserveAspectRatio="xMidYMid slice"
    className="absolute top-0 h-full pointer-events-none"
    style={{width:32, left: right ? 'auto' : 0, right: right ? 0 : 'auto',
            transform: right ? 'scaleX(-1)' : 'none'}}>
    {/* тонкая золотая полоса */}
    <rect x="0" y="0" width="1.5" height="800" fill="hsl(42,70%,55%)" fillOpacity="0.5"/>
    <rect x="28" y="0" width="1" height="800" fill="hsl(42,70%,55%)" fillOpacity="0.2"/>
    {/* повторяющийся ромб */}
    {Array.from({length:20}).map((_,i)=>(
      <g key={i} transform={`translate(0,${i*40})`}>
        <path d="M16,4 L28,16 L16,28 L4,16Z"
          fill="none" stroke="hsl(42,70%,55%)" strokeWidth="0.8" strokeOpacity="0.45"/>
        <circle cx="16" cy="16" r="2.5" fill="hsl(42,70%,58%)" fillOpacity="0.35"/>
      </g>
    ))}
  </svg>
);

/* ── Летящие беркуты ── */
const Eagles = ({ x1, x2 }: { x1: number; x2: number }) => (
  <svg className="absolute top-0 left-0 w-full pointer-events-none" style={{height:'35%'}}
       viewBox="0 0 375 140" preserveAspectRatio="xMidYMid meet">
    {/* Орёл 1 */}
    <g transform={`translate(${x1},45)`} opacity="0.55">
      <ellipse cx="0" cy="0" rx="11" ry="5" fill="hsl(42,70%,60%)"/>
      <ellipse cx="13" cy="-4" rx="5.5" ry="4.5" fill="hsl(42,70%,60%)"/>
      <path d="M17,-3 Q23,-1 20,3 Q17,1 17,-3Z" fill="hsl(42,65%,50%)"/>
      <path d="M-3,-3 C-16,-18 -32,-24 -50,-20 C-36,-13 -20,-6 -9,1Z" fill="hsl(42,68%,58%)"/>
      <path d="M-3,3 C-12,16 -26,26 -44,30 C-30,20 -16,11 -5,5Z" fill="hsl(42,68%,58%)"/>
      <path d="M-12,2 C-18,9 -22,16 -20,22 C-16,13 -12,7 -12,2Z" fill="hsl(42,65%,55%)"/>
    </g>
    {/* Орёл 2 маленький */}
    <g transform={`translate(${x2},25) scale(0.55)`} opacity="0.35">
      <ellipse cx="0" cy="0" rx="11" ry="5" fill="hsl(42,70%,62%)"/>
      <ellipse cx="13" cy="-4" rx="5.5" ry="4.5" fill="hsl(42,70%,62%)"/>
      <path d="M17,-3 Q23,-1 20,3 Q17,1 17,-3Z" fill="hsl(42,65%,52%)"/>
      <path d="M-3,-3 C-16,-18 -32,-24 -50,-20 C-36,-13 -20,-6 -9,1Z" fill="hsl(42,68%,60%)"/>
      <path d="M-3,3 C-12,16 -26,26 -44,30 C-30,20 -16,11 -5,5Z" fill="hsl(42,68%,60%)"/>
    </g>
  </svg>
);

/* ═══════════════════════ СТРАНИЦА ═══════════════════════ */
export default function Index() {
  const [opened, setOpened]   = useState(false);
  const [visible, setVisible] = useState(false);
  const [eagle1, setEagle1]   = useState(-80);
  const [eagle2, setEagle2]   = useState(-200);

  /* беркуты */
  useEffect(()=>{
    let e1=-80, e2=-200;
    const id = setInterval(()=>{
      e1 = e1>450 ? -100 : e1+0.45;
      e2 = e2>450 ? -220 : e2+0.28;
      setEagle1(e1); setEagle2(e2);
    },30);
    return ()=>clearInterval(id);
  },[]);

  const open = () => { setOpened(true); setTimeout(()=>setVisible(true),80); };

  /* палитра */
  const DARK  = '#1a1208';
  const GOLD  = 'hsl(42,75%,60%)';
  const GOLD2 = 'hsl(42,60%,72%)';
  const CREAM = 'hsl(44,55%,92%)';

  const darkBg: React.CSSProperties = {
    background:'linear-gradient(180deg,#0d0b07 0%,#1a1308 40%,#241a0a 100%)'
  };

  return (
    <div style={{fontFamily:"'Cormorant',serif", background:'#0d0b07', color:CREAM}}>

      {/* ══════════════════════════════════════
          СЛАЙД 1 — тёмный, золото, беркуты
      ══════════════════════════════════════ */}
      {!opened && (
        <section onClick={open}
          className="fixed inset-0 z-50 cursor-pointer overflow-hidden flex flex-col"
          style={darkBg}>

          {/* Ночные горы на фоне */}
          <img src={IMG_NIGHT} alt="" className="absolute inset-0 w-full h-full object-cover"
               style={{opacity:0.35, mixBlendMode:'luminosity'}}/>
          {/* Золотистый туман снизу */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3"
               style={{background:'linear-gradient(to top, rgba(26,19,8,0.95), transparent)'}}/>
          {/* Тёмный оверлей сверху */}
          <div className="absolute top-0 left-0 right-0 h-1/4"
               style={{background:'linear-gradient(to bottom, rgba(13,11,7,0.8), transparent)'}}/>

          <Side/><Side right/>
          <Eagles x1={eagle1} x2={eagle2}/>

          {/* Звёзды */}
          {[[12,8],[88,15],[25,22],[72,6],[55,18],[38,4],[80,25]].map(([x,y],i)=>(
            <div key={i} className="absolute rounded-full animate-pulse"
              style={{left:`${x}%`,top:`${y}%`,
                width: i%3===0?2:1.5, height: i%3===0?2:1.5,
                background:GOLD, opacity:0.4+i*0.07,
                animationDelay:`${i*0.4}s`}}/>
          ))}

          <div className="relative z-10 flex flex-col items-center justify-between h-full py-12 px-10 text-center">
            <div/>

            <div className="flex flex-col items-center">
              <Star size={60}/>
              <div style={{marginTop:20, marginBottom:4}}>
                <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'10px',
                  letterSpacing:'0.45em', color:GOLD, textTransform:'uppercase', opacity:0.8}}>
                  Туштажу
                </p>
              </div>
              <h1 style={{fontSize:'clamp(3.5rem,15vw,6rem)', color:CREAM,
                lineHeight:1.0, textShadow:`0 0 40px ${GOLD}44`}}>
                Аэлита
              </h1>
              <span style={{fontSize:'clamp(2.2rem,9vw,3.5rem)', color:GOLD,
                fontStyle:'italic', lineHeight:1.1, textShadow:`0 0 20px ${GOLD}66`}}>
                &amp;
              </span>
              <h1 style={{fontSize:'clamp(3.5rem,15vw,6rem)', color:CREAM,
                lineHeight:1.0, textShadow:`0 0 40px ${GOLD}44`}}>
                Тузагаш
              </h1>
              <Divider light/>
              <p style={{fontSize:'clamp(0.85rem,3.5vw,1.05rem)', color:GOLD2,
                fontStyle:'italic', lineHeight:1.5, marginTop:4}}>
                Јӱректерди Алтай јараштырат
              </p>
              <p style={{fontFamily:"'Golos Text',sans-serif", fontSize:'11px',
                color:CREAM, opacity:0.4, marginTop:3}}>
                «Алтай соединяет сердца»
              </p>
            </div>

            <div className="flex flex-col items-center gap-2" style={{animation:'float-slow 3s ease-in-out infinite'}}>
              <Icon name="ChevronDown" size={22} style={{color:GOLD}}/>
              <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'10px',
                letterSpacing:'0.25em', color:CREAM, opacity:0.5, textTransform:'uppercase'}}>
                Экранга тийип ачыгар
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          СЛАЙД 2 — стихотворение
      ══════════════════════════════════════ */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-10"
        style={darkBg}>
        <img src={IMG_NIGHT} alt="" className="absolute inset-0 w-full h-full object-cover"
             style={{opacity:0.2, mixBlendMode:'luminosity'}}/>
        <div className="absolute inset-0" style={{background:'rgba(13,11,7,0.55)'}}/>
        <Side/><Side right/>

        <div className="relative z-10 flex flex-col items-center"
          style={{opacity:visible?1:0, transform:visible?'none':'translateY(24px)',
            transition:'all 1.4s cubic-bezier(0.16,1,0.3,1)'}}>
          <Star size={44}/>
          <div style={{width:1, height:32, background:`linear-gradient(${GOLD},transparent)`, margin:'8px auto'}}/>
          <p style={{fontSize:'clamp(1.2rem,5vw,1.65rem)', color:CREAM,
            lineHeight:2.1, fontStyle:'italic', opacity:0.9}}>
            Јайдыҥ јараш кӱӱнинде,<br/>
            Јаҥы кӱйген очокко,<br/>
            Јаҥарлап кожоҥ јайыгар,<br/>
            Јараш алкыштар айдыгар.
          </p>
          <Divider light/>
          <p style={{fontFamily:"'Oswald',sans-serif",
            fontSize:'clamp(0.9rem,3.8vw,1.1rem)', color:GOLD2,
            letterSpacing:'0.04em', lineHeight:1.9, opacity:0.85}}>
            Бистиҥ кудабыска<br/>
            акту јӱрегистеҥ кычырып турубыс
          </p>
          <div style={{marginTop:24}}>
            <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'11px',
              color:GOLD, letterSpacing:'0.22em', textTransform:'uppercase', opacity:0.7}}>
              Јаҥы очоктыҥ башталганы
            </p>
            <p style={{fontFamily:"'Golos Text',sans-serif", fontSize:'10px',
              color:CREAM, opacity:0.35, marginTop:3}}>
              Начало нового очага
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          СЛАЙД 3 — молодожёны
      ══════════════════════════════════════ */}
      <section className="relative w-full h-screen overflow-hidden flex items-end justify-center">
        <img src={IMG_COUPLE} alt=""
             className="absolute inset-0 w-full h-full object-cover animate-pan"/>
        <div className="absolute inset-0"
             style={{background:'linear-gradient(to top,rgba(13,11,7,0.92) 0%,rgba(13,11,7,0.1) 55%,transparent 100%)'}}/>
        <Side/><Side right/>
        <div className="relative z-10 text-center pb-14 px-10 w-full">
          <Star size={38}/>
          <Divider light/>
          <h2 style={{fontSize:'clamp(2.4rem,11vw,4.2rem)', color:CREAM,
            lineHeight:1.05, textShadow:`0 0 30px ${GOLD}55`}}>
            Аэлита<br/>
            <span style={{color:GOLD, fontStyle:'italic', fontSize:'0.7em'}}>&amp;</span><br/>
            Тузагаш
          </h2>
        </div>
      </section>

      {/* ══════════════════════════════════════
          СЛАЙД 4 — дата + отсчёт
      ══════════════════════════════════════ */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-10"
        style={darkBg}>
        <img src={IMG_NIGHT} alt="" className="absolute inset-0 w-full h-full object-cover"
             style={{opacity:0.15}}/>
        <div className="absolute inset-0" style={{background:'rgba(13,11,7,0.6)'}}/>
        <Side/><Side right/>

        <div className="relative z-10 flex flex-col items-center gap-5 w-full max-w-xs">
          <Star size={48}/>
          <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'10px',
            letterSpacing:'0.35em', color:GOLD, textTransform:'uppercase', opacity:0.8}}>
            Бу кӱнге арткан
          </p>
          <Countdown/>
          <Divider light/>
          {[
            {icon:'Calendar', text:'14 августа 2026'},
            {icon:'Clock',    text:'16:00'},
          ].map(r=>(
            <div key={r.text} style={{display:'flex', alignItems:'center', gap:14}}>
              <span style={{
                width:40, height:40, borderRadius:'50%',
                border:`1px solid ${GOLD}66`,
                display:'flex', alignItems:'center', justifyContent:'center',
                color:GOLD, flexShrink:0
              }}>
                <Icon name={r.icon} size={17}/>
              </span>
              <span style={{fontSize:'clamp(1.3rem,6vw,2rem)', color:CREAM}}>{r.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          СЛАЙД 5 — место
      ══════════════════════════════════════ */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-10"
        style={darkBg}>
        <Side/><Side right/>
        {/* Декоративный золотой круг */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg width="340" height="340" viewBox="0 0 340 340" fill="none">
            <circle cx="170" cy="170" r="160" stroke={GOLD} strokeWidth="0.5" strokeOpacity="0.15"/>
            <circle cx="170" cy="170" r="140" stroke={GOLD} strokeWidth="0.3" strokeOpacity="0.10"/>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-5">
          {/* Горная иконка */}
          <svg viewBox="0 0 110 80" width={130} height={94} fill="none">
            <path d="M8,72 L38,24 L52,42 L70,8 L98,72Z"
              fill={GOLD} fillOpacity="0.08" stroke={GOLD} strokeWidth="1.5" strokeOpacity="0.7" strokeLinejoin="round"/>
            <path d="M70,8 L62,24 L78,24Z" fill={GOLD} fillOpacity="0.4" strokeWidth="0"/>
            <path d="M38,24 L32,36 L44,36Z" fill={GOLD} fillOpacity="0.3" strokeWidth="0"/>
            <line x1="8" y1="72" x2="98" y2="72" stroke={GOLD} strokeWidth="0.8" strokeOpacity="0.35"/>
          </svg>

          <Star size={40}/>

          <div>
            <p style={{fontSize:'clamp(2rem,9vw,3rem)', color:CREAM,
              fontStyle:'italic', lineHeight:1.1, textShadow:`0 0 20px ${GOLD}44`}}>
              «Туштажу»
            </p>
            <p style={{fontFamily:"'Oswald',sans-serif",
              fontSize:'clamp(0.85rem,4vw,1.1rem)', color:GOLD2,
              letterSpacing:'0.12em', marginTop:6}}>
              кафе • Кош-Агач
            </p>
          </div>

          <Divider light/>

          <a href="https://maps.yandex.ru/?text=Кош-Агач+кафе+Туштажу"
            target="_blank" rel="noreferrer"
            onClick={e=>e.stopPropagation()}
            style={{
              display:'flex', alignItems:'center', gap:10,
              padding:'12px 28px', borderRadius:999,
              border:`1px solid ${GOLD}`,
              color:DARK, background:GOLD,
              fontFamily:"'Oswald',sans-serif", fontSize:'12px',
              letterSpacing:'0.18em', textDecoration:'none',
              boxShadow:`0 4px 24px ${GOLD}44`
            }}>
            <Icon name="Navigation" size={15}/>
            ОТКРЫТЬ НАВИГАТОР
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          СЛАЙД 6 — финал
      ══════════════════════════════════════ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <img src={IMG_VALLEY} alt=""
             className="absolute inset-0 w-full h-full object-cover animate-pan"/>
        <div className="absolute inset-0"
             style={{background:'linear-gradient(to top,rgba(13,11,7,0.85),rgba(13,11,7,0.5))'}}/>
        <Side/><Side right/>

        <div className="relative z-10 flex flex-col items-center text-center px-12 gap-5">
          <Star size={58}/>
          <div style={{width:1, height:40, background:`linear-gradient(${GOLD},transparent)`, margin:'0 auto'}}/>
          <p style={{fontSize:'clamp(1.8rem,8vw,3rem)', color:CREAM,
            lineHeight:1.5, textShadow:`0 0 30px ${GOLD}55`}}>
            Слерди сакып турубыс
          </p>
          <p style={{fontFamily:"'Golos Text',sans-serif", fontSize:'13px',
            color:CREAM, opacity:0.5, marginTop:-8}}>
            Мы ждём вас
          </p>
          <Divider light/>
          <div style={{display:'flex', alignItems:'center', gap:10}}>
            <Icon name="Phone" size={16} style={{color:GOLD}}/>
            <span style={{fontFamily:"'Oswald',sans-serif",
              fontSize:'clamp(1rem,4.5vw,1.2rem)', color:CREAM, letterSpacing:'0.08em'}}>
              +7 (900) 000-00-00
            </span>
          </div>
          <p style={{fontFamily:"'Oswald',sans-serif", fontSize:'10px',
            color:GOLD2, letterSpacing:'0.28em', opacity:0.6, marginTop:4}}>
            АЭЛИТА &amp; ТУЗАГАШ • 14.08.2026
          </p>
        </div>
      </section>
    </div>
  );
}
