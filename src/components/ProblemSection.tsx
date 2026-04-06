import { AlertTriangle, Clock, Eye, Frown, Timer, Wifi } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const problems = [
  { icon: Wifi, title: "Constant Distraction", desc: "Social media, notifications, and endless scrolling destroy focus time." },
  { icon: Clock, title: "Inconsistent Routines", desc: "No structure leads to cramming and burnout cycles every semester." },
  { icon: Timer, title: "Rigid Timers Don't Work", desc: "Pomodoro and fixed-block timers ignore real student schedules." },
  { icon: Frown, title: "Zero Accountability", desc: "No one tracks whether you actually studied or just pretended to." },
  { icon: AlertTriangle, title: "No Reward for Effort", desc: "Hours of honest study effort go completely unrecognized." },
  { icon: Eye, title: "Multi-Platform Learning", desc: "Students use YouTube, PDFs, docs — most apps can't track that." },
];

const ProblemSection = () => (
  <SectionWrapper id="problem">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">The Problem</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        Why Students <span className="gradient-text">Struggle</span> to Stay Consistent
      </h2>
      <p className="text-muted-foreground">Traditional study tools fail because they don't match how real students learn.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {problems.map((p) => (
        <div key={p.title} className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group hover:glow-primary">
          <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
            <p.icon className="w-6 h-6 text-destructive" />
          </div>
          <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProblemSection;
