import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "The story behind Metafiles." };

const team = [
  { name: "Priya Nandakumar", role: "Co-founder, Product", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces" },
  { name: "Theo Marchetti", role: "Co-founder, Engineering", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces" },
  { name: "Mira Solberg", role: "Head of Curation", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" },
];

export default function AboutPage() {
  return (
    <div className="container-px mx-auto max-w-container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-h1 text-foreground">Built for the people who make the internet look good</h1>
        <p className="mt-4 text-body-lg text-muted-foreground">
          Metafiles started in 2022 because two designers were tired of marketplaces flooded with low-effort
          reuploads. Every listing here is reviewed by a person before it goes live.
        </p>
      </div>

      <div className="relative mt-16 aspect-[21/9] w-full overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=700&fit=crop"
          alt="Team working"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-3">
        {[
          { value: "2022", label: "Founded" },
          { value: "640+", label: "Creators onboarded" },
          { value: "80%", label: "Revenue share to creators" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-h1 text-foreground">{s.value}</p>
            <p className="mt-1 text-small text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-center font-display text-h2 text-foreground">The team</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <Image src={m.avatar} alt={m.name} width={96} height={96} className="size-24 rounded-full object-cover" />
              <p className="mt-4 font-display text-h5 text-foreground">{m.name}</p>
              <p className="text-small text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
