import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Countdown from '@/components/Countdown';
import { AltaiKnot, Divider, CornerVine } from '@/components/Ornament';

const COUPLE_IMG = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/fac5ea64-71f0-492f-91f2-e220a8bd330d.jpg';
const VALLEY_IMG = 'https://cdn.poehali.dev/projects/7a68de8c-087c-4353-ab92-ee678b987004/files/e7c41ca6-e0e9-4cb9-8c42-7eb321a72152.jpg';

const NAMES = { a: 'Аэлита', b: 'Тузагаш' };

const Corners = () => (
  <>
    <CornerVine className="absolute top-5 left-5 w-12 h-12 text-gold/60" />
    <CornerVine className="absolute top-5 right-5 w-12 h-12 text-gold/60 scale-x-[-1]" />
    <CornerVine className="absolute bottom-5 left-5 w-12 h-12 text-gold/60 scale-y-[-1]" />
    <CornerVine className="absolute bottom-5 right-5 w-12 h-12 text-gold/60 scale-[-1]" />
  </>
);

const Index = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      {!opened && (
        <section
          onClick={() => setOpened(true)}
          className="fixed inset-0 z-50 parchment cursor-pointer flex flex-col items-center justify-center px-6 text-center"
        >
          <Corners />
          <AltaiKnot className="w-12 h-12 text-gold mb-8 animate-float" />
          <p className="reveal font-cond uppercase tracking-[0.4em] text-xs text-gold mb-6" style={{ animationDelay: '0.1s' }}>
            Туштажу
          </p>
          <h1 className="reveal font-display text-6xl sm:text-7xl leading-none text-deep" style={{ animationDelay: '0.2s' }}>
            {NAMES.a}
          </h1>
          <span className="reveal font-display italic text-3xl text-gold my-3 block" style={{ animationDelay: '0.3s' }}>&amp;</span>
          <h1 className="reveal font-display text-6xl sm:text-7xl leading-none text-deep" style={{ animationDelay: '0.4s' }}>
            {NAMES.b}
          </h1>
          <Divider className="reveal my-10" />
          <div className="reveal flex flex-col items-center gap-2 animate-float" style={{ animationDelay: '0.6s' }}>
            <p className="font-cond uppercase tracking-widest text-xs text-deep/70">Экранга тийип ачыгар</p>
            <Icon name="ChevronDown" size={22} className="text-gold" />
          </div>
        </section>
      )}

      <main className="max-w-xl mx-auto">
        <section className="parchment frame-gold relative min-h-screen flex flex-col items-center justify-center text-center px-8 py-20">
          <Corners />
          <AltaiKnot className="w-10 h-10 text-gold mb-10" />
          <p className="font-display text-2xl sm:text-3xl leading-relaxed text-deep max-w-md">
            Јайдыҥ јараш кӱнинде,<br />
            Јаҥы кӱйген очокко,<br />
            Јаҥарлап кожоҥ јайыгар,<br />
            Јараш алкыштар айдыгар.
          </p>
          <Divider className="my-10" />
          <p className="font-cond text-lg sm:text-xl leading-relaxed text-deep/80 max-w-sm">
            Бистиҥ кудабыска<br />акту јӱрегистеҥ<br />кычырып турубыс
          </p>
        </section>

        <section className="relative min-h-screen overflow-hidden flex items-end justify-center">
          <img src={COUPLE_IMG} alt="" className="absolute inset-0 w-full h-full object-cover animate-pan" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--deep))]/70 via-transparent to-[hsl(var(--parch))]/30" />
          <div className="relative z-10 parchment frame-gold rounded-t-[3rem] px-10 pt-8 pb-12 text-center w-[88%]">
            <AltaiKnot className="w-8 h-8 text-gold mx-auto mb-3" />
            <h2 className="font-display text-4xl text-deep leading-tight">
              {NAMES.a}<br /><span className="text-gold italic text-3xl">&amp;</span><br />{NAMES.b}
            </h2>
          </div>
        </section>

        <section className="parchment frame-gold relative min-h-screen flex flex-col items-center justify-center text-center px-8 py-20">
          <Corners />
          <p className="font-cond uppercase tracking-[0.3em] text-xs text-gold mb-3">Бу кӱнге арткан</p>
          <Divider className="mb-10" />
          <Countdown />
          <Divider className="mt-12 mb-10" />
          <div className="space-y-5 text-left">
            {[
              { icon: 'Calendar', text: '14.08.2026' },
              { icon: 'Clock', text: '16:00' },
              { icon: 'MapPin', text: '«Туштажу» кафе' },
              { icon: 'Mountain', text: 'Кош-Агач' },
            ].map((row) => (
              <div key={row.text} className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full border border-gold/50 flex items-center justify-center text-gold shrink-0">
                  <Icon name={row.icon} size={20} />
                </span>
                <span className="font-display text-2xl text-deep">{row.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
          <img src={VALLEY_IMG} alt="" className="absolute inset-0 w-full h-full object-cover animate-pan" />
          <div className="absolute inset-0 bg-[hsl(var(--deep))]/45" />
          <div className="relative z-10 text-center px-8">
            <AltaiKnot className="w-12 h-12 text-[hsl(var(--parch))] mx-auto mb-8 animate-float drop-shadow" />
            <p className="font-display text-3xl sm:text-4xl text-[hsl(var(--parch))] leading-relaxed drop-shadow-lg">
              Слерди сакып турубыс
            </p>
            <div className="flex items-center justify-center gap-3 my-8">
              <span className="h-px w-10 bg-[hsl(var(--parch))]/60" />
              <Icon name="Phone" size={18} className="text-[hsl(var(--parch))]" />
              <span className="h-px w-10 bg-[hsl(var(--parch))]/60" />
            </div>
            <p className="font-cond uppercase tracking-widest text-sm text-[hsl(var(--parch))]/90">
              +7 (900) 000-00-00
            </p>
            <p className="font-cond uppercase tracking-[0.3em] text-xs text-[hsl(var(--parch))]/70 mt-3">
              Аэлита &amp; Тузагаш
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
