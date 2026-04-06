import { Clock, Gift, LineChart, Lock, Repeat, Shield } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const solutions = [
  { icon: Clock, title: "Flexible 24h Tracking", desc: "Complete your 6 hours anytime — morning, afternoon, or split across the day.", color: "text-primary bg-primary/10" },
  { icon: Repeat, title: "Cumulative Progress", desc: "Multiple sessions add up. 2h + 2h + 2h = Goal achieved. Your pace, your way.", color: "text-accent bg-accent/10" },
  { icon: LineChart, title: "Dual Study Modes", desc: "In-App focus mode or External study mode for YouTube, PDFs, and more.", color: "text-cyan bg-cyan/10" },
  { icon: Gift, title: "Reward Vault", desc: "Earn Focus Points, unlock real vouchers from brands you love.", color: "text-warning bg-warning/10" },
  { icon: Shield, title: "Privacy-Safe Verification", desc: "We verify effort, not your private browsing. No surveillance.", color: "text-success bg-success/10" },
  { icon: Lock, title: "Streak Motivation", desc: "Daily, weekly, and monthly streaks with bonus FP rewards.", color: "text-primary bg-primary/10" },
];

const SolutionSection = () => (
  <SectionWrapper id="features" className="relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
    </div>
    <div className="relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">The Solution</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Built for <span className="gradient-text">Real Student Life</span>
        </h2>
        <p className="text-muted-foreground">FocusLoop combines flexibility, gamification, and privacy into one seamless experience.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {solutions.map((s) => (
          <div key={s.title} className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
            <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default SolutionSection;
