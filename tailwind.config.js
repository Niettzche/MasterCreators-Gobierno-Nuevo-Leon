/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#FF6B00', // Naranja Nuevo León - Para botones, CTAs y acentos
        secondary: '#0F172A', // Azul Pizarra Oscuro - Para navegación y footers
        background: {
          DEFAULT: '#FFFFFF', // Blanco
          alternate: '#F8FAFC', // Gris muy claro para secciones alternas
        },
        text: {
          main: '#1E293B', // Gris Azulado Oscuro
          body: '#334155', // Gris acero para párrafos
        },
        error: '#EF4444', // Rojo estándar
        success: '#10B981', // Verde estándar
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
