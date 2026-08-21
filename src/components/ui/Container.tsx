import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /**
   * `narrow`  — long-form reading columns (legal text, single-column body copy).
   * `default` — every card grid, stats/testimonials band, and CTA band. Kept at
   *             a comfortable measure on purpose: at very wide viewports a 3-up
   *             card grid just gets sparser (not more columns), and a paragraph
   *             stretched across 1600px is materially harder to read.
   * `wide`    — the header row and the home hero only, where the content is
   *             either a big split layout (headline + image) or has its own
   *             internal spacing logic (the nav), so extra width helps instead
   *             of just adding empty gaps.
   */
  size?: "default" | "narrow" | "wide";
};

const maxWidth: Record<NonNullable<ContainerProps["size"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-7xl",
  wide: "max-w-[1600px]",
};

/**
 * The single horizontal gutter for the whole site. Padding is intentionally
 * generous at 360px so nothing ever touches the edge of a small phone.
 */
export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", maxWidth[size], className)}>
      {children}
    </div>
  );
}
