import { Lock, Unlock, ShoppingBag } from "lucide-react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useRef, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { authFetch, BASE_URL } from "@/lib/api";

const VoucherCard = ({ reward, fp, brands, index, currentFP }: { reward: string; fp: number; brands: string[]; index: number; currentFP: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const unlocked = currentFP >= fp;
  const progress = Math.min((currentFP / fp) * 100, 100);
  const remaining = Math.max(fp - currentFP, 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className={`glass rounded-xl p-5 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 ${unlocked ? "glow-primary" : ""}`}
    >
      {unlocked && (
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-bold bg-gradient-to-r from-success to-success/80 text-success-foreground px-2 py-0.5 rounded-full">UNLOCKED</span>
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${unlocked ? "bg-success/20 text-success" : "bg-secondary text-muted-foreground"}`}>
          {unlocked ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
        </div>
        <div>
          <h4 className="font-display font-bold text-foreground">{reward}</h4>
          <p className="text-xs text-muted-foreground">{fp} FP required</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {brands.map((b) => (
          <span key={b} className="text-[10px] glass rounded-full px-2 py-0.5 text-muted-foreground">{b}</span>
        ))}
      </div>

      <div className="space-y-1.5">
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${progress}%` } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className={`h-full rounded-full ${unlocked ? "bg-gradient-to-r from-success to-success/80" : "bg-gradient-to-r from-primary to-accent"}`}
          />
        </div>
        <p className="text-[10px] text-muted-foreground">
          {unlocked ? "Ready to redeem!" : `${remaining} FP remaining`}
        </p>
      </div>

      {unlocked && (
        <Button size="sm" className="w-full mt-3 bg-gradient-to-r from-success to-success/80 text-success-foreground hover:opacity-90 text-xs font-semibold">
          Redeem Now
        </Button>
      )}
    </motion.div>
  );
};

const VoucherStoreSection = () => {
  const [currentFP, setCurrentFP] = useState(325);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchFP = async () => {
        try {
          const res = await authFetch(`${BASE_URL}/rewards/status`);
          if (res.ok) {
            const data = await res.json();
            setCurrentFP(data.focusPoints || 325);
          }
        } catch (err) {
          console.error("Failed to fetch FP:", err);
        }
      };
      fetchFP();
    }
  }, []);

  const tier2 = [
    { reward: "₹50 Voucher", fp: 400, brands: ["Blinkit", "Zepto"] },
    { reward: "₹75 Voucher", fp: 550, brands: ["Swiggy", "Zomato"] },
    { reward: "₹100 Voucher", fp: 700, brands: ["Instamart", "BigBasket"] },
  ];

  const tier3 = [
    { reward: "₹150 Voucher", fp: 1000, brands: ["Swiggy", "Blinkit"] },
    { reward: "₹200 Voucher", fp: 1300, brands: ["Zomato", "Zepto"] },
    { reward: "₹300 Voucher", fp: 1800, brands: ["BigBasket", "Instamart"] },
  ];

  return (
    <SectionWrapper className="relative" id="rewards">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-warning/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-warning mb-4 block">Reward Vault</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Next Voucher Is <span className="gradient-text">Getting Closer</span>
          </h2>
        </div>

        {/* FP Balance card */}
        <div className="max-w-sm mx-auto glass rounded-2xl p-6 text-center mb-12 gradient-border">
          <ShoppingBag className="w-8 h-8 mx-auto mb-2 text-primary" />
          <p className="text-xs text-muted-foreground mb-1">Current Balance</p>
          <p className="text-4xl font-display font-bold gradient-text">{currentFP} FP</p>
          <div className="flex justify-center gap-4 mt-3 text-xs text-muted-foreground">
            <span><span className="text-success">+25</span> Today</span>
            <span><span className="text-accent">12</span> Streak</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...tier2, ...tier3].map((v, i) => (
            <VoucherCard key={v.reward} {...v} index={i} currentFP={currentFP} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VoucherStoreSection;
