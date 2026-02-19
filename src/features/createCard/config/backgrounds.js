export const backgrounds = [
  // 1. No background
  {
    name: "none",
    size: "auto", // irrelevant
  },

  // 2. Stripes — subtle diagonal stripes
  {
    name: `
      repeating-linear-gradient(
        45deg,
        rgba(0,0,0,0.05) 0px,
        rgba(0,0,0,0.05) 3px,
        transparent 3px,
        transparent 12px
      )
    `,
    size: "12px 12px", // scales well on small elements
  },

  // 3. Polka Dots — evenly spaced small dots
  {
    name: `
      radial-gradient(rgba(0,0,0,0.07) 3px, transparent 3px)
    `,
    size: "12px 12px", // spacing works for small and large elements
  },

  // 4. Squares/Grid — subtle grid lines
  {
    name: `
      linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
    `,
    size: "15px 15px", // small enough for buttons, visible on forms
  },
];
