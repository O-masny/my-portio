// utils.tsx
import { Bitter } from "@next/font/google";
import { Bebas_Neue } from "@next/font/google";
import "tailwindcss/tailwind.css";

// Definice fontů
export const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
});

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

// Globální styly (můžete přidat další podle potřeby)
export const globalStyles = {
  container: "max-w-screen-lg mx-auto px-4",
  heading: `${bitter.className} text-4xl font-bold text-center mb-4`,
  subheading: `${bitter.className} text-2xl font-semibold text-center mb-2`,
  text: `${bitter.className} text-base text-gray-700`,
  button: `${bebas.className} bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700`,
};

// Globální styly pro Tailwind
export const globalTailwindStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Bebas+Neue&display=swap');
  
  body {
    font-family: 'Bitter', serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bitter', serif;
  }

  .font-bebas {
    font-family: 'Bebas Neue', cursive;
  }
`;

export default globalStyles;
