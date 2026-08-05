import type { Config } from "tailwindcss";

/**
 * DESIGN TOKEN SYSTEM
 * -----------------------------------------------------------------------
 * Palette: near-black surfaces, warm-white text, single bold accent
 * (electric indigo). Semantic colors are soft, desaturated, never harsh.
 * Every color is expressed as an HSL CSS variable so light/dark and
 * future dynamic-color theming only require swapping variables, never
 * class names.
 */

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1360px",
      },
    },
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        // Core surfaces
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          raised: "hsl(var(--surface-raised))",
          overlay: "hsl(var(--surface-overlay))",
          sunken: "hsl(var(--surface-sunken))",
        },
        // Primary / accent
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
          pressed: "hsl(var(--primary-pressed))",
          soft: "hsl(var(--primary-soft))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        outline: {
          DEFAULT: "hsl(var(--outline))",
          strong: "hsl(var(--outline-strong))",
        },
        // Semantic
        success: {
          DEFAULT: "hsl(var(--success))",
          soft: "hsl(var(--success-soft))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          soft: "hsl(var(--warning-soft))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          soft: "hsl(var(--error-soft))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          soft: "hsl(var(--info-soft))",
        },
        disabled: "hsl(var(--disabled))",
      },
      fontFamily: {
        display: ["var(--font-geist)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Full typographic scale — every size has defined leading + tracking
        display: ["4.5rem", { lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "650" }],
        hero: ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "650" }],
        h1: ["2.75rem", { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "600" }],
        h2: ["2.125rem", { lineHeight: "1.18", letterSpacing: "-0.015em", fontWeight: "600" }],
        h3: ["1.625rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        h4: ["1.3125rem", { lineHeight: "1.3", letterSpacing: "-0.008em", fontWeight: "600" }],
        h5: ["1.125rem", { lineHeight: "1.35", letterSpacing: "-0.005em", fontWeight: "600" }],
        subtitle: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "450" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.65", letterSpacing: "0em", fontWeight: "400" }],
        body: ["0.9375rem", { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" }],
        small: ["0.8125rem", { lineHeight: "1.55", letterSpacing: "0.001em", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.45", letterSpacing: "0.01em", fontWeight: "450" }],
        label: ["0.8125rem", { lineHeight: "1.3", letterSpacing: "0.005em", fontWeight: "550" }],
        button: ["0.875rem", { lineHeight: "1", letterSpacing: "0.002em", fontWeight: "550" }],
        badge: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.03em", fontWeight: "600" }],
      },
      spacing: {
        // 8pt system with 4px half-steps for fine control
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        xs: "6px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "28px",
        pill: "999px",
      },
      boxShadow: {
        // Layered elevation — soft, low-opacity, never a hard drop shadow
        "elevation-1": "0 1px 2px 0 hsl(var(--shadow-color) / 0.06), 0 1px 1px 0 hsl(var(--shadow-color) / 0.04)",
        "elevation-2": "0 2px 8px -2px hsl(var(--shadow-color) / 0.10), 0 1px 2px 0 hsl(var(--shadow-color) / 0.06)",
        "elevation-3": "0 8px 24px -4px hsl(var(--shadow-color) / 0.16), 0 2px 6px -1px hsl(var(--shadow-color) / 0.08)",
        "elevation-4": "0 16px 40px -8px hsl(var(--shadow-color) / 0.22), 0 4px 10px -2px hsl(var(--shadow-color) / 0.10)",
        "focus-ring": "0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary) / 0.55)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        // Natural, expressive easing — no linear, no harsh ease-in
        standard: "cubic-bezier(0.2, 0, 0, 1)",
        emphasized: "cubic-bezier(0.3, 0, 0.1, 1)",
        decelerate: "cubic-bezier(0, 0, 0, 1)",
      },
      transitionDuration: {
        instant: "100ms",
        fast: "150ms",
        base: "220ms",
        slow: "320ms",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 220ms cubic-bezier(0.2,0,0,1)",
        "fade-up": "fade-up 320ms cubic-bezier(0.2,0,0,1)",
        shimmer: "shimmer 1.8s infinite linear",
        "scale-in": "scale-in 180ms cubic-bezier(0.2,0,0,1)",
      },
      maxWidth: {
        container: "1360px",
        prose: "680px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
