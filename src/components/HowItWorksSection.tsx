import { motion, useInView } from "framer-motion";
import { Target, Clock, CheckCircle2, Flame, Gift, Trophy, Zap, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { useRef } from "react";

const steps = [
  { icon: Target, title: "Set Your Daily Target", desc: "Choose your minimum 6-hour study commitment." },
  { icon: Clock, title: "Study Anytime", desc: "Morning, afternoon, or night — your schedule, your choice." },
  { icon: CheckCircle2, title: "Split or Single Sessions", desc: "One long session or many short ones — it all counts." },
  { icon: Zap, title: "Reach 6 Verified Hours", desc: "The system accumulates your verified study time across the day." },
  { icon: Award, title: "Unlock 25 Focus Points", desc: "Complete the daily minimum and earn your daily FP reward." },
  { icon: Flame, title: "Build 7-Day Streaks", desc: "Hit your goal every day for a week to earn +5 FP bonus." },
  { icon: Trophy, title: "Monthly Consistency", desc: "Maintain all weekly streaks in a month for +10 FP bonus." },
  { icon: Gift, title: "Redeem Vouchers", desc: "Spend Focus Points in the Reward Vault for real vouchers." },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">How It Works</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          From Study to <span className="gradient-text">Rewards</span> in 8 Steps
        </h2>
      </div>
      <div ref={ref} className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-[hsl(var(--glow-cyan))]" />
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative flex items-start gap-4 mb-10 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
            }`}
          >
            <div className={`absolute ${i % 2 === 0 ? "left-6 md:left-auto md:right-[-20px]" : "left-6 md:left-[-20px]"} w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center z-10 shrink-0`}>
              <step.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="glass rounded-xl p-5 ml-14 md:ml-0">
              <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">Step {i + 1}</span>
              <h3 className="font-display font-semibold text-foreground mt-1 mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HowItWorksSection;
