import { Check, Package, CreditCard, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  label: string;
  description: string;
  icon: React.ElementType;
  status: "complete" | "current" | "upcoming";
}

const defaultSteps: TimelineStep[] = [
  { label: "Order placed", description: "We received your order", icon: Package, status: "complete" },
  { label: "Payment confirmed", description: "Your card was charged successfully", icon: CreditCard, status: "complete" },
  { label: "Files ready", description: "Available in your downloads", icon: Download, status: "complete" },
];

export function OrderTimeline({ steps = defaultSteps }: { steps?: TimelineStep[] }) {
  return (
    <ol className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <li key={step.label} className="relative flex gap-4 pb-8 last:pb-0">
          {i < steps.length - 1 && (
            <span
              className={cn(
                "absolute left-[19px] top-10 h-full w-px",
                step.status === "complete" ? "bg-primary" : "bg-outline"
              )}
            />
          )}
          <span
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-full border-2",
              step.status === "complete" && "border-primary bg-primary text-primary-foreground",
              step.status === "current" && "border-primary bg-primary-soft text-primary-hover",
              step.status === "upcoming" && "border-outline bg-surface text-muted-foreground"
            )}
          >
            {step.status === "complete" ? <Check className="size-4" /> : <step.icon className="size-4" />}
          </span>
          <div className="pt-1.5">
            <p className="text-body font-medium text-foreground">{step.label}</p>
            <p className="text-small text-muted-foreground">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
