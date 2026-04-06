import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart3, Flame, Gift, Clock, TrendingUp, Award, LogOut, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CircularProgress from "@/components/CircularProgress";
import AnimatedCounter from "@/components/AnimatedCounter";
import { BASE_URL, authFetch } from "@/lib/api";

interface SessionLog {
  time: string;
  mode: string;
  hours: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    focusPoints: 0,
    currentStreak: 0,
    todayStudyTime: "0h",
    dailyGoal: "6h",
    sessions: [] as SessionLog[],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await authFetch(`${BASE_URL}/rewards/status`);
        if (res.ok) {
          const result = await res.json();
          setData((prev) => ({
            ...prev,
            focusPoints: result.focusPoints || 0,
            currentStreak: result.currentStreak || 0,
            // Mocking other data if not present in API yet
            todayStudyTime: result.todayStudyTime || "5.5h",
            sessions: result.sessions || [
              { time: "8:00 AM - 10:00 AM", hours: "2h", mode: "In-App" },
              { time: "1:00 PM - 2:30 PM", hours: "1.5h", mode: "External" },
              { time: "7:00 PM - 9:30 PM", hours: "2h", mode: "In-App" },
            ],
          }));
        } else if (res.status === 401) {
          // Token expired or invalid
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 px-4 md:px-8 pb-12">
      {/* Navbar for Dashboard */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong h-16 border-b border-border/50">
        <div className="container max-w-7xl mx-auto flex items-center justify-between h-full px-4">
          <a href="/" className="flex items-center gap-2 font-display font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            Ekagra
          </a>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground hover:text-foreground gap-2">
            <LogOut className="w-4 h-4" /> Log Out
          </Button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">Welcome back, Student 👋</h1>
          <p className="text-muted-foreground">Here's your study progress for today.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass rounded-xl p-6 text-center glow-primary">
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-display font-bold text-foreground"><AnimatedCounter target={parseFloat(data.todayStudyTime)} suffix="h" /></p>
            <p className="text-sm text-muted-foreground">Today's Study Time</p>
          </div>
          <div className="glass rounded-xl p-6 text-center glow-primary">
            <Flame className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-3xl font-display font-bold text-foreground"><AnimatedCounter target={data.currentStreak} /></p>
            <p className="text-sm text-muted-foreground">Current Streak</p>
          </div>
          <div className="glass rounded-xl p-6 text-center glow-primary">
            <Gift className="w-8 h-8 text-warning mx-auto mb-3" />
            <p className="text-3xl font-display font-bold text-foreground"><AnimatedCounter target={data.focusPoints} suffix=" FP" /></p>
            <p className="text-sm text-muted-foreground">Focus Points</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Daily Goal Progress
            </h3>
            <div className="flex flex-col items-center justify-center mb-8">
              <CircularProgress progress={(parseFloat(data.todayStudyTime) / parseFloat(data.dailyGoal)) * 100} size={180} label={`${data.todayStudyTime} / ${data.dailyGoal}`} sublabel="Target Met" />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground mb-4">Session Logs</p>
              {data.sessions.map((s, i) => (
                <div key={i} className="flex items-center justify-between glass rounded-xl px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{s.time}</span>
                    <span className="text-xs text-muted-foreground">{s.mode} session</span>
                  </div>
                  <span className="text-primary font-bold">{s.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-warning" /> Upcoming Rewards
              </h3>
              <div className="space-y-6">
                <div className="glass rounded-xl p-5 border-l-4 border-l-primary">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">₹50 Amazon Voucher</span>
                    <span className="text-xs glass px-2 py-1 rounded-full text-primary">81% Complete</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-primary" style={{ width: "81%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">Earn 75 more FP to redeem</p>
                </div>
                
                <div className="glass rounded-xl p-5 border-l-4 border-l-accent opacity-60">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">₹100 Swiggy Voucher</span>
                    <span className="text-xs glass px-2 py-1 rounded-full text-accent">40% Complete</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-accent" style={{ width: "40%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">Earn 475 more FP to redeem</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Active Study Rooms</h3>
              <p className="text-sm text-muted-foreground mb-6">Join a room to stay accountable with others.</p>
              <div className="space-y-3">
                <div className="glass rounded-xl p-4 flex items-center justify-between hover:border-primary transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold group-hover:text-primary transition-colors">JEE Mains Grinders</p>
                      <p className="text-[10px] text-muted-foreground">12 students active</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs h-8">Join</Button>
                </div>
                <div className="glass rounded-xl p-4 flex items-center justify-between hover:border-accent transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Flame className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold group-hover:text-accent transition-colors">NEET 2026 Batch</p>
                      <p className="text-[10px] text-muted-foreground">8 students active</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs h-8">Join</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
