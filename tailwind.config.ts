import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customs:{
          'cyan-150': '#E5F9FF',
          'fg-status-void': '#a855f7',
          'fg-status-accept': '#22C55E',
          'fg-status-ready-to-send': '#3B82F6',
          'fg-status-awaiting-aml': '#F97316',
          'bg-status-void': '#F3E8FF',
          'bg-status-accept': '#D1FAE5', 
          'bg-status-ready-to-send': '#DBEAFE',
          'bg-status-awaiting-aml': '#FFECD1',  
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
