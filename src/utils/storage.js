const PROFILE_KEY = "mindpilot.profile.v1";
const FINANCE_KEY = "mindpilot.finance.v1";
const PROGRESS_KEY = "mindpilot.progress.v1";
const EXTRA_KEY = "mindpilot.prototype.v1";

export const defaultProfile = {
  displayName: "Your next chapter",
  workingHours: "10:00 AM – 7:00 PM",
  englishLevel: "Intermediate",
  dailyPersonalHours: 2,
  internationalPreference: "Open to suitable countries"
};
export const defaultFinance = { salary: "", monthlyExpenses: "" };
export const defaultProgress = { date: localDate(), completedMissions: [], minutesSpent: 0, streak: 0 };
export const defaultExtras = { englishNote: "", tasks: ["Define the first offer for my software company", "Improve one portfolio project"], countries: ["Germany", "Canada", "Australia"] };
function localDate() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; }
function read(key, fallback) { try { const raw = localStorage.getItem(key); return raw ? { ...fallback, ...JSON.parse(raw) } : fallback; } catch { return fallback; } }
export const loadProfile = () => { const old = read(PROFILE_KEY, {}); const clean = { ...old }; delete clean.salary; delete clean.monthlyExpenses; return { ...defaultProfile, ...clean }; };
export const loadFinance = () => { const finance = read(FINANCE_KEY, defaultFinance); const old = read(PROFILE_KEY, {}); return { ...finance, salary: finance.salary || old.salary || "", monthlyExpenses: finance.monthlyExpenses || old.monthlyExpenses || "" }; };
export const loadProgress = () => { const saved = read(PROGRESS_KEY, defaultProgress); return saved.date === localDate() ? saved : { ...defaultProgress, streak: saved.streak || 0 }; };
export const loadExtras = () => read(EXTRA_KEY, defaultExtras);
export const saveProfile = value => { const clean = { ...value }; delete clean.salary; delete clean.monthlyExpenses; localStorage.setItem(PROFILE_KEY, JSON.stringify(clean)); };
export const saveFinance = value => localStorage.setItem(FINANCE_KEY, JSON.stringify(value));
export const saveProgress = value => localStorage.setItem(PROGRESS_KEY, JSON.stringify(value));
export const saveExtras = value => localStorage.setItem(EXTRA_KEY, JSON.stringify(value));
export function exportBackup(profile, progress, finance, extras) {
  const payload = { app: "MindPilot", schemaVersion: 2, exportedAt: new Date().toISOString(), profile, finance, progress, extras };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `mindpilot-backup-${localDate()}.json`; a.click(); URL.revokeObjectURL(url);
}
export function importBackup(file) { return new Promise((resolve,reject)=>{ const reader=new FileReader(); reader.onload=()=>{ try { const data=JSON.parse(reader.result); if(data.app!=="MindPilot"||!data.profile||!data.progress) throw new Error("This file is not a valid MindPilot backup."); resolve(data); } catch(e){reject(e);} }; reader.onerror=()=>reject(new Error("Could not read the selected file.")); reader.readAsText(file); }); }
export function resetMindPilot() { [PROFILE_KEY, FINANCE_KEY, PROGRESS_KEY, EXTRA_KEY].forEach(k=>localStorage.removeItem(k)); }
