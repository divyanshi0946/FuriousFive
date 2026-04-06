import { BarChart3, Flame, Gift, Clock, TrendingUp, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CircularProgress from "./CircularProgress";
import AnimatedCounter from "./AnimatedCounter";

const DashboardPreview = () => (
  <SectionWrapper id="dashboard" className="relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
    </div>
    <div className="relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">Dashboard</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Track Hours. Build Streaks. <span className="gradient-text">Earn Rewards.</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto glass rounded-2xl p-6 md:p-8 glow-primary">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Stats row */}
          <div className="glass rounded-xl p-5 text-center">
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-display font-bold text-foreground"><AnimatedCounter target={6} suffix="h" /></p>
            <p className="text-xs text-muted-foreground">Today's Study Time</p>
            <span className="inline-block mt-2 text-[10px] bg-success/20 text-success px-2 py-0.5 rounded-full font-semibold">✓ Daily Goal Achieved</span>
          </div>
          <div className="glass rounded-xl p-5 text-center">
            <Flame className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-2xl font-display font-bold text-foreground"><AnimatedCounter target={12} /></p>
            <p className="text-xs text-muted-foreground">Day Streak</p>
            <span className="inline-block mt-2 text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-semibold">Week 2 Active</span>
          </div>
          <div className="glass rounded-xl p-5 text-center">
            <Gift className="w-6 h-6 text-warning mx-auto mb-2" />
            <p className="text-2xl font-display font-bold text-foreground"><AnimatedCounter target={325} suffix=" FP" /></p>
            <p className="text-xs text-muted-foreground">Focus Points</p>
            <span className="inline-block mt-2 text-[10px] bg-warning/20 text-warning px-2 py-0.5 rounded-full font-semibold">75 FP to ₹50 voucher</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Progress + Streak */}
          <div className="glass rounded-xl p-5">
            <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" /> Daily Progress
            </h4>
            <div className="flex items-center justify-center mb-4">
              <CircularProgress progress={100} size={140} label="6h / 6h" sublabel="Completed ✓" />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-medium">Session Breakdown</p>
              {[
                { time: "8:00 AM - 10:00 AM", hours: "2h", mode: "In-App" },
                { time: "1:00 PM - 2:30 PM", hours: "1.5h", mode: "External" },
                { time: "7:00 PM - 9:30 PM", hours: "2.5h", mode: "In-App" },
              ].map((s) => (
                <div key={s.time} className="flex items-center justify-between glass rounded-lg px-3 py-2 text-xs">
                  <span className="text-muted-foreground">{s.time}</span>
                  <span className="text-foreground font-semibold">{s.hours}</span>
                  <span className="text-primary text-[10px]">{s.mode}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly + Reward */}
          <div className="space-y-5">
            <div className="glass rounded-xl p-5">
              <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                <Flame className="w-4 h-4 text-accent" /> Weekly Streak
              </h4>
              <div className="flex gap-2">
                {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d, i) => (
                  <div key={d} className={`flex-1 rounded-lg py-3 text-center text-[10px] font-semibold ${
                    i < 5
                      ? "bg-gradient-to-b from-success/20 to-success/5 text-success border border-success/20"
                      : i === 5
                      ? "bg-gradient-to-b from-primary/20 to-primary/5 text-primary border border-primary/20"
                      : "bg-secondary text-muted-foreground"
                  }`}>{d}</div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">6/7 days complete • +5 FP bonus pending</p>
            </div>

            <div className="glass rounded-xl p-5">
              <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-warning" /> Monthly Progress
              </h4>
              <div className="flex gap-2 mb-2">
                {[1,2,3,4].map((w) => (
                  <div key={w} className={`flex-1 rounded-lg py-2 text-center text-[10px] font-semibold ${
                    w <= 3 ? "bg-success/20 text-success border border-success/20" : "bg-secondary text-muted-foreground"
                  }`}>W{w}</div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground">3/4 weeks completed • +10 FP bonus at month end</p>
            </div>

            <div className="glass rounded-xl p-5">
              <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan" /> Next Reward
              </h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground font-semibold">₹50 Voucher</span>
                <span className="text-xs text-muted-foreground">325/400 FP</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: "81%" }} />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">75 FP remaining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default DashboardPreview;
