import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

const CTASection = () => (
  <SectionWrapper className="relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
    </div>
    <div className="relative z-10 text-center max-w-3xl mx-auto">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
        Study On Your Time. Stay Consistent.{" "}
        <span className="gradient-text">Earn Real Rewards.</span>
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
        Join thousands of students who are building better study habits and earning real-world vouchers.
      </p>
      <Link to="/signup">
        <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-10 py-6 text-base glow-primary hover:opacity-90 transition-opacity group">
          Start Your Focus Journey
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  </SectionWrapper>
);

export default CTASection;
