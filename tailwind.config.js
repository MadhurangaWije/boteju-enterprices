/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom brand colors (preserved from original config)
        brand: {
          // Primary: Navy Blue / Deep Teal
          primary: {
            50: '#f0f8ff',
            100: '#e0efff',
            200: '#bae0ff',
            300: '#7cc8ff',
            400: '#36acff',
            500: '#0084ff',
            600: '#006bb3',
            700: '#0A3D62', // Main Navy Blue
            800: '#083353',
            900: '#0d2a45',
            teal: '#006D77', // Alternative Deep Teal
          },
          // Secondary: Bright Green
          secondary: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#00B894', // Main Bright Green
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
          },
          // Accent: Soft Orange
          accent: {
            50: '#fff8f1',
            100: '#feecdc',
            200: '#fcd9bd',
            300: '#fdba8c',
            400: '#FF8C42', // Main Soft Orange
            500: '#FFA500', // Alternative Orange
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          // Highlight/CTA: Soft Yellow & Sky Blue
          highlight: {
            yellow: '#FDCB6E', // Soft Yellow for CTAs
            skyBlue: '#74B9FF', // Sky Blue for CTAs
          },
          // Neutral Base: Light Gray / Off-White
          neutral: {
            50: '#FFFFFF',
            100: '#F4F4F4', // Light Gray
            200: '#ECEFF1', // Off-White
            300: '#e5e7eb',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          }
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}