import Image from "next/image";
import { LOGOS } from "@/config/images";
import { content } from "@/content";
import { cn } from "@/lib/cn";

/**
 * The Taoohan wordmark — the client's real logo.
 *
 * TWO VARIANTS, because the lettering colour is baked into the artwork:
 *   `onLight` — dark lettering, for the white header
 *   `onDark`  — white lettering, for the inverse footer band
 * The mark itself is the brand green in both. Unlike the pair this replaced,
 * the two files share one intrinsic size (880x289), so both variants size
 * identically off the same height class — see the note in `config/images.ts`
 * before swapping either one.
 *
 * ACCESSIBILITY: the artwork contains the company name as pixels, so `alt`
 * carries it as text. That is also why neither the header nor the footer
 * repeats "Taoohan" in a <span> beside it — that read out twice.
 *
 * SIZE is caller-controlled via `size`, not baked in: `cn()` in this project
 * is a plain string joiner (no tailwind-merge), so a conflicting height class
 * passed through `className` would sit next to the default in the DOM and
 * the winner would depend on Tailwind's internal stylesheet order rather
 * than which one the caller intended. `size` replaces the default outright
 * instead of colliding with it.
 *
 * The default is sized against the header row — 64px tall, 80px at lg. At
 * ~3:1 this lockup is far more compact than the ~6.5:1 one it replaced, so
 * it can afford more height: h-10 renders ~122px wide, still comfortably
 * inside the ~159px the old wordmark took up before it started pushing the
 * 7-item nav and two CTAs off the row at 1280px.
 */
export function Logo({
  variant = "onLight",
  size = "h-8 w-auto lg:h-10",
  className,
  priority = false,
}: {
  variant?: "onLight" | "onDark";
  /** Height (and width: auto) classes — replaces the default, never merges with it. */
  size?: string;
  className?: string;
  priority?: boolean;
}) {
  const wordmark =
    variant === "onDark" ? LOGOS.wordmarkOnDark : LOGOS.wordmarkOnLight;

  return (
    <Image
      src={wordmark.src}
      alt={content.brand.name}
      width={wordmark.width}
      height={wordmark.height}
      priority={priority}
      unoptimized
      className={cn(size, className)}
    />
  );
}
