import { Bell, Eye, Fingerprint, Monitor, ShieldCheck, Smartphone } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const PrivacySection = () => (
  <SectionWrapper id="privacy">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-success mb-4 block">Trust & Privacy</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        Smart Verification, <span className="gradient-text">Not Surveillance</span>
      </h2>
      <p className="text-lg text-muted-foreground font-medium">"We verify effort, not private browsing."</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
      {/* In-App Mode */}
      <div className="glass rounded-2xl p-8 gradient-border">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
          <Monitor className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-display font-bold text-xl text-foreground mb-3">In-App Focus Mode</h3>
        <p className="text-sm text-muted-foreground mb-4">For studying directly inside the platform.</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-success shrink-0" /> Active session timer with interaction detection</li>
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-success shrink-0" /> Idle detection pauses automatically</li>
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-success shrink-0" /> Only active, verified time counts</li>
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-success shrink-0" /> Session integrity checks</li>
        </ul>
      </div>

      {/* External Mode */}
      <div className="glass rounded-2xl p-8 gradient-border">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
          <Smartphone className="w-7 h-7 text-accent" />
        </div>
        <h3 className="font-display font-bold text-xl text-foreground mb-3">External Study Mode</h3>
        <p className="text-sm text-muted-foreground mb-4">For YouTube lectures, PDFs, coding platforms, and more.</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-success shrink-0" /> Select your study source type</li>
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-success shrink-0" /> Privacy-safe check-ins every 45–60 min</li>
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-success shrink-0" /> 3–5 minute grace window</li>
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-success shrink-0" /> Miss 2 consecutive? Time pauses</li>
        </ul>
      </div>
    </div>

    {/* Source types */}
    <div className="max-w-3xl mx-auto glass rounded-xl p-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Supported External Study Sources</p>
      <div className="flex flex-wrap justify-center gap-2">
        {["PDF / Notes", "YouTube Lecture", "Coding Practice", "Online Course", "Article / Research", "Google Docs", "Other"].map((s) => (
          <span key={s} className="glass rounded-full px-4 py-1.5 text-xs text-foreground font-medium">{s}</span>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default PrivacySection;
