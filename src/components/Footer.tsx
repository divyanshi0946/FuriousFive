import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-12 px-4">
    <div className="container max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg mb-4">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            FocusLoop
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Turn flexible study time into real rewards. Privacy-first, student-friendly.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#rewards" className="hover:text-foreground transition-colors">Rewards</a></li>
            <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
            <li><a href="#dashboard" className="hover:text-foreground transition-colors">Dashboard</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm mb-3">Trust</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a></li>
            <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            <li><span className="cursor-default">Terms of Service</span></li>
            <li><span className="cursor-default">Privacy Policy</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm mb-3">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="cursor-default">Twitter / X</span></li>
            <li><span className="cursor-default">Instagram</span></li>
            <li><span className="cursor-default">LinkedIn</span></li>
            <li><span className="cursor-default">contact@focusloop.in</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© 2026 FocusLoop. Built for students, by students.</span>
        <span>🏆 Hackathon Product • Privacy-First EdTech</span>
      </div>
    </div>
  </footer>
);

export default Footer;
