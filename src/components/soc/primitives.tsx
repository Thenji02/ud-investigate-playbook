import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  index,
  title,
  kicker,
  children,
}: {
  id: string;
  index: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60 py-14 md:py-20">
      <div className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="label-mono text-primary">{index}</span>
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
      </div>
      {kicker && <p className="-mt-5 mb-8 max-w-3xl text-sm text-muted-foreground">{kicker}</p>}
      {children}
    </section>
  );
}

const sevMap: Record<string, string> = {
  critical: "bg-severity-critical/15 text-severity-critical border-severity-critical/40",
  high: "bg-severity-high/15 text-severity-high border-severity-high/40",
  medium: "bg-severity-medium/15 text-severity-medium border-severity-medium/40",
  low: "bg-severity-low/15 text-severity-low border-severity-low/40",
  info: "bg-primary/12 text-primary border-primary/40",
  neutral: "bg-muted text-muted-foreground border-border",
};

export function Badge({ tone, children }: { tone: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded border px-2 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-wider",
        sevMap[tone.toLowerCase()] ?? sevMap.neutral,
      )}
    >
      {children}
    </span>
  );
}

export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("panel p-5 md:p-6", className)}>{children}</div>;
}

export function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="panel overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">{children}</table>
    </div>
  );
}

export function Th({ children }: { children: ReactNode }) {
  return (
    <th className="label-mono border-b border-border bg-secondary/50 px-4 py-3 text-left font-medium">
      {children}
    </th>
  );
}

export function Td({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <td className={cn("border-b border-border/50 px-4 py-2.5 align-top", className)}>{children}</td>
  );
}
