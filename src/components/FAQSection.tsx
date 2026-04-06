import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  { q: "Can I split my 6 hours across the day?", a: "Absolutely! You can study in as many sessions as you want throughout the day. 2h morning + 2h afternoon + 2h evening = 6h goal achieved. The system accumulates all verified study time within 24 hours." },
  { q: "Do I need to study 6 hours in one sitting?", a: "Not at all. FocusLoop is designed for real student schedules. Study whenever it works for you — the only requirement is reaching 6 total verified hours within the day." },
  { q: "What if I study on YouTube or PDFs?", a: "Use External Study Mode! Select your study source type, and the platform will use privacy-safe check-ins (every 45–60 minutes) to verify you're still studying. No browser surveillance." },
  { q: "How are Focus Points calculated?", a: "Complete 6+ verified hours daily = 25 FP. Maintain a 7-day streak = +5 FP bonus. Complete all weekly streaks in a month = +10 FP bonus. Points never expire." },
  { q: "What happens if I miss one day?", a: "That day earns 0 FP, and the weekly streak for that week resets. But your total earned FP stays safe, and you can start building a new streak the very next day. It's designed to be fair, not punishing." },
  { q: "How do weekly and monthly bonuses work?", a: "Weekly bonus: Hit your 6h goal all 7 days = +5 FP. Monthly bonus: Maintain all weekly streaks in a month = +10 FP. These stack with your daily rewards." },
  { q: "Are you tracking my browser history?", a: "Never. FocusLoop uses privacy-safe check-ins, not browser surveillance. We verify effort and consistency, not your private browsing activity." },
  { q: "How do I redeem vouchers?", a: "Visit the Reward Vault, pick a voucher that you've unlocked with your Focus Points, and redeem it instantly. Vouchers are available for brands like Swiggy, Zomato, Blinkit, and more." },
];

const FAQSection = () => (
  <SectionWrapper id="faq">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">FAQ</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        Frequently Asked <span className="gradient-text">Questions</span>
      </h2>
    </div>

    <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-xl px-6 border-none">
          <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-5">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </SectionWrapper>
);

export default FAQSection;
