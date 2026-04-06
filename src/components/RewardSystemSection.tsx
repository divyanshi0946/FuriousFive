import { Flame, Trophy, Zap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import AnimatedCounter from "./AnimatedCounter";

const rewards = [
  { icon: Zap, title: "Daily Reward", rule: "Complete 6+ verified hours", points: 25, suffix: "FP", color: "from-primary to-accent" },
  { icon: Flame, title: "Weekly Bonus", rule: "7-day streak completion", points: 5, suffix: "FP", color: "from-accent to-[hsl(var(--glow-cyan))]" },
  { icon: Trophy, title: "Monthly Bonus", rule: "All weekly streaks maintained", points: 10, suffix: "FP", color: "from-warning to-[hsl(var(--destructive))]" },
];

const RewardSystemSection = () => (
  <SectionWrapper id="rewards">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-warning mb-4 block">Gamification</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        Consistency <span className="gradient-text">Unlocks Rewards</span>
      </h2>
      <p className="text-muted-foreground">Every hour you study earns you progress toward real-world vouchers.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
      {rewards.map((r) => (
        <div key={r.title} className="glass rounded-2xl p-8 text-center hover:glow-primary transition-all duration-300 group gradient-border">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center mx-auto mb-5`}>
            <r.icon className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="font-display font-bold text-xl text-foreground mb-2">{r.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{r.rule}</p>
          <div className="text-3xl font-display font-bold gradient-text">
            +<AnimatedCounter target={r.points} />{" "}{r.suffix}
          </div>
        </div>
      ))}
    </div>

    {/* Streak break info */}
    <div className="max-w-2xl mx-auto glass rounded-xl p-6 border-warning/20">
      <h4 className="font-display font-semibold text-foreground mb-2">⚡ Fair Streak Rules</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• Miss a day? That day gets 0 FP, but you can restart your streak tomorrow.</li>
        <li>• Weekly bonus resets only for that week — not your total points.</li>
        <li>• Monthly bonus depends on maintaining weekly streaks consistently.</li>
        <li>• Your earned FP never expire. Keep building toward your next reward.</li>
      </ul>
    </div>
  </SectionWrapper>
);

export default RewardSystemSection;
