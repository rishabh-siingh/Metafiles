export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container-px mx-auto max-w-container py-16">
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-h1 text-foreground">{title}</h1>
        <p className="mt-2 text-small text-muted-foreground">Last updated {updated}</p>
        <div className="prose-legal mt-10 flex flex-col gap-6 text-body text-foreground/90">{children}</div>
      </div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-display text-h4 text-foreground">{title}</h2>
      <div className="flex flex-col gap-3 text-body text-muted-foreground">{children}</div>
    </section>
  );
}
