/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Theme 1: Midnight Purple & Neon Cyan
        "midnight-purple": "#1A1A40",
        "neon-cyan": "#00FFFF",
        gold: "#FFD700",

        // Theme 2: Dark Slate & Bright Yellow
        "dark-slate": "#2F4F4F",
        "bright-yellow": "#FFD700",
        orange: "#FFA500",

        // Theme 3: Deep Indigo & Electric Pink
        "deep-indigo": "#2E0854",
        "electric-pink": "#FF1493",
        "hot-pink": "#FF69B4",

        // Theme 4: Charcoal & Mint Green
        charcoal: "#36454F",
        "mint-green": "#98FF98",
        "spring-green": "#00FF7F",

        // Theme 5: Dark Navy & Soft Amber
        "dark-navy": "#0A1128",
        "soft-amber": "#FFBF00",
        coral: "#FF7F50",
      },
      transitionDuration: {
        5000: "5000ms",
      },
      

      animation: {
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee 10s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`
      },
    },
  },

  plugins: [],
};
