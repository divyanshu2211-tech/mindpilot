import { Sparkles } from "lucide-react";
export default function ProgressCard({ completed, total, minutes }) {
  const pct = total ? Math.round(completed / total * 100) : 0;
  return <section className="progress-card"><div className="progress-head"><div><span className="eyebrow">YOUR DAILY MOMENTUM</span><h2>Progress, not perfection.</h2><p>Every completed mission is a vote for the person you're becoming.</p></div><div className="progress-spark"><Sparkles size={22}/></div></div><div className="progress-track"><div style={{width:`${pct}%`}}/></div><div className="progress-foot"><strong>{pct}% complete</strong><span>{completed} of {total} missions · {minutes} planned minutes</span></div></section>;
}