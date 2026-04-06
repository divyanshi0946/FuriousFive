import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { useRef } from "react";

const examples = [
  { blocks: [{ label: "6h", width: "100%", color: "from-primary to-accent" }], desc: "One focused session" },
  { blocks: [{ label: "3h", width: "50%", color: "from-primary to-primary/80" }, { label: "3h", width: "50%", color: "from-accent to-accent/80" }], desc: "Two equal sessions" },
  { blocks: [{ label: "2h", width: "33%", color: "from-primary to-primary/80" }, { label: "2h", width: "33%", color: "from-accent to-accent/80" }, { label: "2h", width: "34%", color: "from-[hsl(var(--glow-cyan))] to-[hsl(var(--glow-cyan))]/80" }], desc: "Three balanced sessions" },
  { blocks: [{ label: "1.5h", width: "25%", color: "from-primary to-primary/80" }, { label: "2h", width: "33%", color: "from-accent to-accent/80" }, { label: "2.5h", width: "42%", color: "from-[hsl(var(--glow-cyan))] to-[hsl(var(--glow-cyan))]/80" }], desc: "Mixed flexible sessions" },
];

const FlexibleStudySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionWrapper className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4 block">Flexibility</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Study on <span className="gradient-text">Your Schedule</span>
          </h2>
          <p className="text-muted-foreground">Complete your 6-hour daily goal however you want. All valid. All rewarded.</p>
        </div>

        <div ref={ref} className="max-w-2xl mx-auto space-y-6">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.desc}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">{ex.desc}</span>
                <span className="flex items-center gap-1 text-xs text-success font-medium">
                  <Check className="w-3.5 h-3.5" /> Valid
                </span>
              </div>
              <div className="flex gap-1 h-8 rounded-lg overflow-hidden">
                {ex.blocks.map((block, j) => (
                  <motion.div
                    key={j}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: block.width } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15 + j * 0.1 }}
                    className={`bg-gradient-to-r ${block.color} rounded-md flex items-center justify-center text-[11px] font-semibold text-primary-foreground`}
                  >
                    {block.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FlexibleStudySection;
