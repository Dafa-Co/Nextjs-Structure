/**
 * ***** note *****
 * if you add new color in daisy config theme, you should add it in tailwind colors
 * example:
 *   ** light theme **
 *    --ma: 'oklch color format';
 *   ** tailwind colors **
 *    ma: 'oklch(var(--ma) / <alpha-value>)';
 */

const themes = {
  light: {
    primary: "#033645",
    "primary-content": "oklch(100% 0 0)",
    secondary: "#2b076e",
    "secondary-content": "#fff",
    neutral: "#2B3440",
    "neutral-content": "#D7DDE4",
    "base-100": "#f8f9fe",
    "base-200": "#F2F2F2",
    "base-300": "#E5E6E6",
    "base-content": "#1f2937",

    // custom colors

    // primary
    "--primary-50": " 0.97 0.02 293.3",
    "--primary-100": "0.94 0.03 295.4",
    "--primary-200": "0.88 0.06 293.28",
    "--primary-300": "0.8 0.11 293.86",
    "--primary-400": "0.69 0.18 293.4",
    "--primary-500": "0.59 0.25 291.63",
    "--primary-600": "0.52 0.29 287.22",
    "--primary-700": "0.49 0.27 289.31",
    "--primary-800": "0.43 0.24 289.8",
    "--primary-900": "0.38 0.2 290.82",
    "--primary-950": "0.28 0.15 287.12",
    "--primary-1000": "0.51 0.29 284.49",
    "--primary-1100": "0.49 0.29 272.16",
    "--primary-1200": "0.49 0.29 270.32",

    // geay
    "--gray-100": "0.87 0.01 280.67",
    "--gray-200": "0.74 0.03 283.3",
    "--gray-300": "0.65 0.03 283.5",
    "--gray-500": "0.48 0.04 282.99",
    "--gray-800": "0.3 0.02 285.08",
    "--gray-900": "0.18 0.01 285.42",
    "--gray-1000": "0 0 0",
  },
  dark: {
    primary: "#6D16FF",
    "primary-content": "#342BFF",
    neutral: "#2a323c",
    "neutral-content": "#A6ADBB",
    "base-100": "#1d232a",
    "base-200": "#191e24",
    "base-300": "#15191e",
    "base-content": "#A6ADBB",

    // custom colors
    "--gray-100": "0.87 0.01 280.67",
    "--gray-200": "0.74 0.03 283.3",
    "--gray-300": "0.65 0.03 283.5",
    "--gray-500": "0.48 0.04 282.99",
    "--gray-800": "0.3 0.02 285.08",
    "--gray-900": "0.18 0.01 285.42",
    "--gray-1000": "0 0 0",
  },
  tailwindColors: {
    // primary
    "primary-50": "oklch(var(--primary-50) / <alpha-value>)",
    "primary-100": "oklch(var(--primary-100) / <alpha-value>)",
    "primary-200": "oklch(var(--primary-200) / <alpha-value>)",
    "primary-300": "oklch(var(--primary-300) / <alpha-value>)",
    "primary-400": "oklch(var(--primary-400) / <alpha-value>)",
    "primary-500": "oklch(var(--primary-500) / <alpha-value>)",
    "primary-600": "oklch(var(--primary-600) / <alpha-value>)",
    "primary-700": "oklch(var(--primary-700) / <alpha-value>)",
    "primary-800": "oklch(var(--primary-800) / <alpha-value>)",
    "primary-900": "oklch(var(--primary-900) / <alpha-value>)",
    "primary-950": "oklch(var(--primary-950) / <alpha-value>)",
    "primary-1000": "oklch(var(--primary-1000) / <alpha-value>)",
    "primary-1100": "oklch(var(--primary-1100) / <alpha-value>)",
    "primary-1200": "oklch(var(--primary-1200) / <alpha-value>)",

    // gray
    "gray-100": "oklch(var(--gray-100) / <alpha-value>)",
    "gray-200": "oklch(var(--gray-200) / <alpha-value>)",
    "gray-300": "oklch(var(--gray-300) / <alpha-value>)",
    "gray-500": "oklch(var(--gray-500) / <alpha-value>)",
    "gray-800": "oklch(var(--gray-800) / <alpha-value>)",
    "gray-900": "oklch(var(--gray-900) / <alpha-value>)",
    "gray-1000": "oklch(var(--gray-1000) / <alpha-value>)",
  },
} as const;

export default themes;
