import { Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const testimonials = [
  { name: "Priya S.", role: "Engineering Student", text: "The flexible 6-hour system actually fits my routine. I study in 3 chunks and still earn my daily points!" },
  { name: "Arjun K.", role: "Medical Student", text: "I use YouTube lectures, and External Study Mode made this actually usable for me. Other apps couldn't do that." },
  { name: "Sneha M.", role: "Commerce Student", text: "Seeing my points and voucher progress kept me consistent for 3 weeks straight. The rewards are real motivation." },
  { name: "Rahul D.", role: "CS Student", text: "No surveillance, no guilt — just honest study tracking. The privacy approach is what made me trust this platform." },
];

const TestimonialsSection = () => (
  <SectionWrapper>
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">Testimonials</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        Loved by <span className="gradient-text">Students</span>
      </h2>
    </div>

    <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
      {testimonials.map((t) => (
        <div key={t.name} className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-warning text-warning" />)}
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
          <div>
            <p className="text-sm font-semibold text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default TestimonialsSection;
