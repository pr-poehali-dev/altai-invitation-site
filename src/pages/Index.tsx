import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import Countdown from '@/components/Countdown';

const IMG_BG     = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/3a740bed-d15c-41bd-9431-d4b0194b61e2.jpg';
const IMG_COUPLE = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/bucket/de814e19-38b7-4eff-892f-ed8df174d9cf.jpg';
const IMG_VALLEY = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/7830eb8e-bcf1-4e78-ab94-1d20ffdea6c6.jpg';

/* ── Цвета ── */
const G  = 'hsl(28,40%,35%)';   /* основной коричневый */
const G2 = 'hsl(34,45%,52%)';   /* золото светлее */
const CR = 'hsl(40,50%,96%)';   /* кремовый */

/* ── Алтайский орнамент-медальон ── */
const Medallion = ({ size = 64 }: { size?: number }) => {
  const s = size, c = s/2;
  const petals = Array.from({length:8}, (_, i) => {
    const a  = (i * 45) * Math.PI / 180;
    const a1 = ((i * 45) - 18) * Math.PI / 180;
    const a2 = ((i * 45) + 18) * Math.PI / 180;
    const r1 = c * 0.82, r2 = c * 0.55;
    return `M${c},${c} L${c+r2*Math.cos(a1)},${c+r2*Math.sin(a1)} Q${c+r1*Math.cos(a)},${c+r1*Math.sin(a)} ${c+r2*Math.cos(a2)},${c+r2*Math.sin(a2)}Z`;
  });
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      {petals.map((d,i) => (
        <path key={i} d={d} fill={G} fillOpacity={i%2===0 ? 0.55 : 0.28}/>
      ))}
      <circle cx={c} cy={c} r={c*0.38} fill="none" stroke={G} strokeWidth="1" strokeOpacity="0.5"/>
      <circle cx={c} cy={c} r={c*0.22} fill={G} fillOpacity="0.4"/>
      <circle cx={c} cy={c} r={c*0.1}  fill={G} fillOpacity="0.8"/>
      {/* ромб внутри */}
      <path d={`M${c},${c-c*0.34} L${c+c*0.34},${c} L${c},${c+c*0.34} L${c-c*0.34},${c}Z`}
        fill="none" stroke={G} strokeWidth="0.8" strokeOpacity="0.45"/>
    </svg>
  );
};

/* ── Золотой разделитель с веточками ── */
const Sep = () => (
  <div style={{display:'flex', alignItems:'center', gap:8, margin:'10px 0'}}>
    <svg viewBox="0 0 80 16" width={80} height={16} fill="none" stroke={G2}>
      <line x1="0" y1="8" x2="58" y2="8" strokeWidth="0.8" strokeOpacity="0.5"/>
      <path d="M50,8 Q44,4 38,3" strokeWidth="0.9" strokeOpacity="0.45"/>
      <path d="M50,8 Q44,12 38,13" strokeWidth="0.9" strokeOpacity="0.45"/>
      <path d="M38,3 Q30,2 22,4" strokeWidth="0.8" strokeOpacity="0.35"/>
      <path d="M38,13 Q30,14 22,12" strokeWidth="0.8" strokeOpacity="0.35"/>
    </svg>
    <svg viewBox="0 0 12 12" width={12} height={12} fill={G2}>
      <polygon points="6,0 12,6 6,12 0,6" fillOpacity="0.7"/>
      <polygon points="6,2.5 9.5,6 6,9.5 2.5,6" fillOpacity="0.4"/>
    </svg>
    <svg viewBox="0 0 80 16" width={80} height={16} fill="none" stroke={G2}
         style={{transform:'scaleX(-1)'}}>
      <line x1="0" y1="8" x2="58" y2="8" strokeWidth="0.8" strokeOpacity="0.5"/>
      <path d="M50,8 Q44,4 38,3" strokeWidth="0.9" strokeOpacity="0.45"/>
      <path d="M50,8 Q44,12 38,13" strokeWidth="0.9" strokeOpacity="0.45"/>
      <path d="M38,3 Q30,2 22,4" strokeWidth="0.8" strokeOpacity="0.35"/>
      <path d="M38,13 Q30,14 22,12" strokeWidth="0.8" strokeOpacity="0.35"/>
    </svg>
  </div>
);

/* ── Боковые линии ── */
const Side = ({ flip = false }: { flip?: boolean }) => (
  <svg viewBox="0 0 8 800" preserveAspectRatio="xMidYMid slice"
    className="absolute top-0 h-full pointer-events-none z-10"
    style={{width:8, ...(flip ? {right:0, transform:'scaleX(-1)'} : {left:0})}}>
    <rect x="0" y="0" width="1.2" height="800" fill={G} fillOpacity="0.3"/>
  </svg>
);

/* ══════════════════════════════════════════════════════════ */
export default function Index() {
  const [opened,  setOpened]  = useState(false);
  const [visible, setVisible] = useState(false);

  const open = () => {
    setOpened(true);
    setTimeout(() => setVisible(true), 80);
  };

  /* Анимация пульса стрелки */
  const [pulse, setPulse] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setPulse(p => !p), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{fontFamily:"'Cormorant',serif", background:CR}}>

      {/* ══ СЛАЙД 1: Стартовый ══ */}
      {!opened && (
        <section onClick={open}
          className="fixed inset-0 z-50 cursor-pointer overflow-hidden flex flex-col items-center justify-between"
          style={{background:CR}}>

          {/* Текстурный фон */}
          <img src={IMG_BG} alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{opacity:0.55, mixBlendMode:'multiply'}}/>

          <Side/><Side flip/>

          {/* Угловые маленькие орнаменты */}
          {[
            'top-3 left-6', 'top-3 right-6',
            'bottom-3 left-6', 'bottom-3 right-6'
          ].map((pos, i) => (
            <div key={i} className={`absolute ${pos}`}>
              <Medallion size={28}/>
            </div>
          ))}

          <div className="relative z-10 flex flex-col items-center justify-between h-full py-12 px-12 text-center">
            {/* Верх — маленький орнамент */}
            <div style={{opacity:0.6}}>
              <Medallion size={32}/>
            </div>

            {/* Центр — только имена */}
            <div className="flex flex-col items-center">
              <Medallion size={72}/>
              <div style={{height:24}}/>
              <h1 style={{
                fontSize:'clamp(4rem,16vw,7rem)',
                color:G,
                lineHeight:0.95,
                letterSpacing:'-0.01em',
                fontWeight:400,
              }}>
                Аэлита
              </h1>
              <span style={{
                fontSize:'clamp(2.5rem,10vw,4rem)',
                color:G2,
                fontStyle:'italic',
                lineHeight:1.2,
              }}>
                &amp;
              </span>
              <h1 style={{
                fontSize:'clamp(4rem,16vw,7rem)',
                color:G,
                lineHeight:0.95,
                letterSpacing:'-0.01em',
                fontWeight:400,
              }}>
                Тузагаш
              </h1>
              <div style={{marginTop:20}}>
                <Sep/>
              </div>
              <p style={{
                fontFamily:"'Golos Text',sans-serif",
                fontSize:'clamp(0.75rem,3vw,0.9rem)',
                color:G,
                opacity:0.55,
                letterSpacing:'0.04em',
                marginTop:4,
                fontStyle:'italic',
              }}></p>
            </div>

            {/* Низ — пульсирующая стрелка */}
            <div className="flex flex-col items-center gap-2">
              <p style={{
                fontFamily:"'Golos Text',sans-serif",
                fontSize:'11px',
                color:G,
                opacity:0.5,
                letterSpacing:'0.18em',
                textTransform:'uppercase',
              }}>
                Экранга тийип ачыгар
              </p>
              <Icon name="ChevronDown" size={20}
                style={{color:G2, opacity: pulse ? 1 : 0.3, transition:'opacity 0.6s'}}/>
            </div>
          </div>
        </section>
      )}

      {/* ══ СЛАЙД 2: Стихотворение ══ */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-12"
        style={{background:CR}}>
        <img src={IMG_BG} alt="" className="absolute inset-0 w-full h-full object-cover"
             style={{opacity:0.3, mixBlendMode:'multiply'}}/>
        <Side/><Side flip/>

        <div className="relative z-10 flex flex-col items-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 1.4s cubic-bezier(0.16,1,0.3,1)'
          }}>
          <Medallion size={48}/>
          <div style={{width:1, height:28, background:`linear-gradient(${G2},transparent)`, margin:'10px auto'}}/>
          <p style={{
            fontSize:'clamp(1.25rem,5.5vw,1.75rem)',
            color:G,
            lineHeight:2.0,
            fontStyle:'italic',
          }}>
            Јайдыҥ јараш кӱӱнинде,<br/>
            Јаҥы кӱйген очокко,<br/>
            Јаҥарлап кожоҥ јайыгар,<br/>
            Јараш алкыштар айдыгар.
          </p>
          <Sep/>
          <p style={{
            fontFamily:"'Golos Text',sans-serif",
            fontSize:'clamp(0.9rem,3.8vw,1.1rem)',
            color:G,
            opacity:0.7,
            lineHeight:1.9,
          }}>
            Бистиҥ кудабыска<br/>
            акту јӱрегистеҥ кычырып турубыс
          </p>
          {/* Алтайский очаг */}
          <div style={{marginTop:28, display:'flex', flexDirection:'column', alignItems:'center', gap:10}}>
            <div style={{position:'relative', width:220, height:180}}>
              <img
                src="https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/bucket/544cc1d8-cc27-461b-a699-0dcc949ce589.jpg"
                alt="Алтайский очаг"
                style={{width:'100%', height:'100%', objectFit:'contain'}}
              />
              {/* плавное растворение по краям */}
              <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at center, transparent 55%, ${CR} 90%)`}}/>
            </div>

            <p style={{
              fontFamily:"'Cormorant',serif",
              fontSize:'clamp(1rem,4.5vw,1.3rem)',
              color:G,
              fontStyle:'italic',
              letterSpacing:'0.03em',
            }}>
              Јаҥы очоктыҥ башталганы
            </p>
            <p style={{
              fontFamily:"'Golos Text',sans-serif",
              fontSize:'11px',
              color:G,
              opacity:0.45,
              letterSpacing:'0.12em',
            }}></p>
          </div>
        </div>
      </section>

      {/* ══ СЛАЙД 3: Пара ══ */}
      <section className="relative w-full h-screen overflow-hidden">
        <img src={IMG_COUPLE} alt=""
             className="absolute inset-0 w-full h-full"
             style={{objectFit:'contain', objectPosition:'center center', background:'hsl(40,50%,96%)'}}/>
        {/* Плавный переход сверху */}
        <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
             style={{background:'linear-gradient(to bottom, hsl(40,50%,96%) 0%, transparent 100%)'}}/>
        {/* Плавный переход снизу */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
             style={{background:'linear-gradient(to top, hsl(40,50%,96%) 0%, transparent 100%)'}}/>
        {/* Плавный переход слева */}
        <div className="absolute top-0 left-0 bottom-0 w-16 pointer-events-none"
             style={{background:'linear-gradient(to right, hsl(40,50%,96%) 0%, transparent 100%)'}}/>
        {/* Плавный переход справа */}
        <div className="absolute top-0 right-0 bottom-0 w-16 pointer-events-none"
             style={{background:'linear-gradient(to left, hsl(40,50%,96%) 0%, transparent 100%)'}}/>
        <Side/><Side flip/>
      </section>

      {/* ══ СЛАЙД 4: Дата + отсчёт ══ */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-10"
        style={{background:CR}}>
        <img src={IMG_BG} alt="" className="absolute inset-0 w-full h-full object-cover"
             style={{opacity:0.3, mixBlendMode:'multiply'}}/>
        <Side/><Side flip/>

        <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-xs">
          <Medallion size={52}/>
          <p style={{
            fontFamily:"'Golos Text',sans-serif",
            fontSize:'10px',
            letterSpacing:'0.35em',
            color:G2,
            textTransform:'uppercase',
          }}>
            Бу кӱнге арткан
          </p>
          <Countdown/>
          <Sep/>
          {[
            {icon:'Calendar', text:'14 августа 2026'},
            {icon:'Clock',    text:'16:00'},
          ].map(r => (
            <div key={r.text} style={{display:'flex', alignItems:'center', gap:14}}>
              <span style={{
                width:42, height:42, borderRadius:'50%',
                border:`1px solid ${G2}99`,
                display:'flex', alignItems:'center', justifyContent:'center',
                color:G2, flexShrink:0,
              }}>
                <Icon name={r.icon} size={17}/>
              </span>
              <span style={{fontSize:'clamp(1.3rem,6vw,2rem)', color:G}}>{r.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ СЛАЙД 5: Место + навигатор ══ */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-10"
        style={{background:CR}}>
        <img src={IMG_BG} alt="" className="absolute inset-0 w-full h-full object-cover"
             style={{opacity:0.3, mixBlendMode:'multiply'}}/>
        <Side/><Side flip/>

        <div className="relative z-10 flex flex-col items-center gap-5">
          {/* Нарисованная горка */}
          <svg viewBox="0 0 120 90" width={140} height={105} fill="none">
            <path d="M10,80 L44,28 L60,48 L78,10 L106,80Z"
              fill={G} fillOpacity="0.08"
              stroke={G} strokeWidth="1.4" strokeLinejoin="round" strokeOpacity="0.6"/>
            <path d="M78,10 L70,26 L86,26Z"
              fill={G} fillOpacity="0.3" strokeWidth="0"/>
            <path d="M44,28 L38,40 L50,40Z"
              fill={G} fillOpacity="0.22" strokeWidth="0"/>
            <line x1="10" y1="80" x2="106" y2="80"
              stroke={G} strokeWidth="0.8" strokeOpacity="0.3"/>
          </svg>

          <Medallion size={44}/>

          <div>
            <p style={{
              fontSize:'clamp(2rem,9vw,3.2rem)',
              color:G,
              fontStyle:'italic',
              lineHeight:1.1,
            }}>
              «Туштажу»
            </p>
            <p style={{
              fontFamily:"'Golos Text',sans-serif",
              fontSize:'clamp(0.85rem,3.8vw,1.1rem)',
              color:G2,
              letterSpacing:'0.1em',
              marginTop:6,
            }}>
              кафе • с. Кош-Агач, ул. Каменистая, 27
            </p>
          </div>

          <Sep/>

          {/* Карта Яндекс */}
          <div style={{width:'100%', maxWidth:340, borderRadius:16, overflow:'hidden',
            boxShadow:`0 4px 24px ${G}22`, border:`1px solid ${G}22`}}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=88.657,50.079&z=16&pt=88.657,50.079,pm2rdm&text=Кош-Агач+ул.+Каменистая+27"
              width="100%" height="200" frameBorder="0"
              style={{display:'block'}}
              title="Карта"
            />
          </div>

          <a href="https://yandex.ru/maps/?text=Кош-Агач+ул.+Каменистая+27"
            target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              display:'flex', alignItems:'center', gap:10,
              padding:'13px 32px', borderRadius:999,
              background:G,
              color:CR,
              fontFamily:"'Golos Text',sans-serif",
              fontSize:'13px',
              letterSpacing:'0.14em',
              textDecoration:'none',
              boxShadow:`0 6px 24px ${G}44`,
            }}>
            <Icon name="Navigation" size={15}/>
            Открыть навигатор
          </a>
        </div>
      </section>

      {/* ══ СЛАЙД 6: Финал ══ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <img src={IMG_VALLEY} alt=""
             className="absolute inset-0 w-full h-full object-cover animate-pan"/>
        <div className="absolute inset-0"
             style={{background:'rgba(30,20,10,0.52)'}}/>
        <Side/><Side flip/>

        <div className="relative z-10 flex flex-col items-center text-center px-12 gap-5">
          <Medallion size={60}/>
          <div style={{width:1, height:36, background:`linear-gradient(${CR}55,transparent)`}}/>
          <p style={{
            fontSize:'clamp(1.8rem,8vw,3rem)',
            color:CR,
            lineHeight:1.5,
          }}>
            Слерди сакып турубыс
          </p>
          <p style={{
            fontFamily:"'Golos Text',sans-serif",
            fontSize:'13px',
            color:CR,
            opacity:0.5,
            marginTop:-8,
            fontStyle:'italic',
          }}>
            Мы ждём вас
          </p>
          <Sep/>

          <p style={{
            fontFamily:"'Golos Text',sans-serif",
            fontSize:'10px',
            color:CR,
            letterSpacing:'0.25em',
            opacity:0.45,
            marginTop:4,
            textTransform:'uppercase',
          }}>
            Аэлита &amp; Тузагаш · 14.08.2026
          </p>
        </div>
      </section>

    </div>
  );
}