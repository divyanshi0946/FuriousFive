import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Rewards", href: "#rewards" },
  { label: "Privacy", href: "#privacy" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          Ekagra
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold glow-primary">
              Start Focusing
            </Button>
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass-strong border-t border-border/30 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary/50">
                  {l.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button variant="ghost" className="w-full text-muted-foreground">Log In</Button>
                </Link>
                <Link to="/signup" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold">Start Focusing</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
