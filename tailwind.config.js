/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: {
                    bg: '#050505',
                    accent: '#3B82F6',
                    silver: '#F3F4F6',
                }
            },
            backdropBlur: {
                xs: '2px',
            },
            keyframes: {
                'gradient-shift': {
                    '0%, 100%': {
                        backgroundPosition: '0% 50%',
                        backgroundSize: '200% 200%'
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                        backgroundSize: '200% 200%'
                    },
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0) translateX(0)',
                        opacity: '0.3'
                    },
                    '50%': {
                        transform: 'translateY(-100vh) translateX(50px)',
                        opacity: '0.6'
                    },
                },
            },
            animation: {
                'gradient-shift': 'gradient-shift 15s ease infinite',
                'float': 'float 20s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
