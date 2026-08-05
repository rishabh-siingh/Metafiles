import { ShieldCheck, Zap, Users, RefreshCw } from "lucide-react";

const stats = [
  { value: "2,400+", label: "Vetted products" },
  { value: "18,200+", label: "Active buyers" },
  { value: "640+", label: "Independent creators" },
  { value: "4.8/5", label: "Average rating" },
];

const reasons = [
  { icon: ShieldCheck, title: "Every listing reviewed", body: "A human reviewer checks files, licensing, and quality before anything goes live." },
  { icon: Zap, title: "Instant delivery", body: "Files are ready in your downloads the moment payment clears — no waiting on emails." },
  { icon: RefreshCw, title: "Free lifetime updates", body: "When a creator ships an update, it's already in your library. No repurchase." },
  { icon: Users, title: "Creators paid directly", body: "80% of every sale goes straight to the person who made it." },
];

export function Stats() {
  return (
    <section className="border-y border-outline bg-surface">
      <div className="container-px mx-auto max-w-container py-16 md:py-20">
        <div className="grid grid-cols-2 gap-8 border-b border-outline pb-16 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display text-h1 text-foreground">{s.value}</p>
              <p className="mt-1 text-small text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="mb-10 text-center font-display text-h2 text-foreground">Why buyers choose Metafiles</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="flex flex-col gap-3 rounded-lg border border-outline bg-surface-raised p-6">
                <span className="flex size-10 items-center justify-center rounded-sm bg-primary-soft text-primary-hover">
                  <r.icon className="size-5" />
                </span>
                <h3 className="font-display text-h5 text-foreground">{r.title}</h3>
                <p className="text-small text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
