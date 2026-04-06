import { Check, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const comparisons = [
  { feature: "Flexible daily scheduling", us: true, them: false },
  { feature: "Multi-session accumulation", us: true, them: false },
  { feature: "External study mode (YouTube, PDFs)", us: true, them: false },
  { feature: "Real-world voucher rewards", us: true, them: false },
  { feature: "Privacy-safe verification", us: true, them: false },
  { feature: "Weekly & monthly streak bonuses", us: true, them: false },
  { feature: "No browser surveillance", us: true, them: false },
  { feature: "Scalable for colleges & edtech", us: true, them: false },
];

const WhyBetterSection = () => (
  <SectionWrapper>
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">Comparison</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        Why FocusLoop Is <span className="gradient-text">Different</span>
      </h2>
    </div>

    <div className="max-w-2xl mx-auto glass rounded-2xl overflow-hidden">
      <div className="grid grid-cols-3 gap-0 px-6 py-4 border-b border-border/30">
        <span className="text-sm font-semibold text-muted-foreground">Feature</span>
        <span className="text-sm font-semibold text-center gradient-text">FocusLoop</span>
        <span className="text-sm font-semibold text-center text-muted-foreground">Others</span>
      </div>
      {comparisons.map((c, i) => (
        <div key={c.feature} className={`grid grid-cols-3 gap-0 px-6 py-3 ${i % 2 === 0 ? "bg-secondary/20" : ""}`}>
          <span className="text-sm text-foreground">{c.feature}</span>
          <div className="flex justify-center"><Check className="w-5 h-5 text-success" /></div>
          <div className="flex justify-center"><X className="w-5 h-5 text-destructive/50" /></div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhyBetterSection;
