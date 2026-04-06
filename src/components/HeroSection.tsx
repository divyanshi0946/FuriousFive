import { motion } from "framer-motion";
import { ArrowRight, Clock, Flame, Gift, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import CircularProgress from "./CircularProgress";
import { publicFetch } from "@/lib/api";

const floatingCards = [
  { icon: Clock, label: "Today", value: "5.5h / 6h", color: "from-primary to-accent" },
  { icon: Flame, label: "Streak", value: "12 Days", color: "from-accent to-[hsl(var(--glow-cyan))]" },
  { icon: Gift, label: "FP Balance", value: "325 FP", color: "from-success to-primary" },
];

const HeroSection = () => {
  const [stats, setStats] = useState({
    userCount: 10000,
    totalFocusPoints: 325,
    activeRooms: 15
  });

  useEffect(() => {
    const loadStats = async () => {
      const data = await publicFetch("/stats"); // Example Base44 endpoint
      if (data) {
        setStats({
          userCount: data.userCount || 10000,
          totalFocusPoints: data.totalPoints || 325,
          activeRooms: data.activeRooms || 15
        });
      }
    };
    loadStats();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* BG effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--glow-cyan))]/5 rounded-full blur-[140px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Trusted by {stats.userCount.toLocaleString()}+ students
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
              Turn Flexible Study Time Into{" "}
              <span className="gradient-text">Real Rewards</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              A privacy-first study accountability platform that lets students complete 6+ verified hours anytime within the day, build streaks, earn Focus Points, and redeem real-world vouchers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-8 glow-primary hover:opacity-90 transition-opacity group">
                  Start Your Focus Journey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="border-border/50 text-foreground hover:bg-secondary/50">
                  See How It Works
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-success" /> Privacy-First</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Flexible Hours</div>
              <div className="flex items-center gap-2"><Gift className="w-4 h-4 text-accent" /> Real Vouchers</div>
            </div>
          </motion.div>

          {/* Right - Dashboard mockup */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            {/* Main dashboard card */}
            <div className="glass rounded-2xl p-6 space-y-6 glow-primary">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-foreground">Today's Progress</h3>
                <span className="text-xs glass rounded-full px-3 py-1 text-success font-medium">● Live</span>
              </div>

              <div className="flex items-center justify-around">
                <CircularProgress progress={92} label="5.5h / 6h" sublabel="Daily Goal" />
                <div className="space-y-3 text-center">
                  <div className="text-3xl font-display font-bold text-foreground">
                    <AnimatedCounter target={stats.totalFocusPoints} suffix=" FP" />
                  </div>
                  <p className="text-xs text-muted-foreground">Focus Points Balance</p>
                  <div className="glass rounded-lg px-3 py-1.5 text-xs">
                    <span className="text-success">+25 FP</span> earned today
                  </div>
                </div>
              </div>

            {/* Multi-session bar */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-medium">Today's Sessions</p>
              <div className="flex gap-1 h-3 rounded-full overflow-hidden bg-secondary">
                <motion.div initial={{ width: 0 }} animate={{ width: "33%" }} transition={{ duration: 1, delay: 0.5 }} className="bg-gradient-to-r from-primary to-primary/80 rounded-l-full" />
                <motion.div initial={{ width: 0 }} animate={{ width: "25%" }} transition={{ duration: 1, delay: 0.8 }} className="bg-gradient-to-r from-accent to-accent/80" />
                <motion.div initial={{ width: 0 }} animate={{ width: "34%" }} transition={{ duration: 1, delay: 1.1 }} className="bg-gradient-to-r from-[hsl(var(--glow-cyan))] to-[hsl(var(--glow-cyan))]/80 rounded-r-full" />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Morning 2h</span>
                <span>Afternoon 1.5h</span>
                <span>Evening 2h</span>
              </div>
            </div>

            {/* Streak */}
            <div className="flex gap-1.5">
              {["M","T","W","T","F","S","S"].map((d, i) => (
                <div key={d+i} className={`flex-1 h-8 rounded-md flex items-center justify-center text-[10px] font-semibold ${i < 5 ? "bg-gradient-to-b from-success/30 to-success/10 text-success border border-success/30" : "bg-secondary text-muted-foreground"}`}>
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* Floating cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.2 }}
              className={`absolute glass rounded-xl px-4 py-3 animate-float ${
                i === 0 ? "-top-4 -left-4" : i === 1 ? "-top-4 -right-4" : "-bottom-4 right-8"
              }`}
              style={{ animationDelay: `${i * 1}s` }}
            >
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                  <card.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">{card.label}</p>
                  <p className="text-xs font-semibold text-foreground">{card.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
