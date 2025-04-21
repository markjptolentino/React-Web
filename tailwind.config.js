/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-out',
                'slide-up': 'slideUp 1s ease-out',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)' },
                    '50%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)' },
                },
                fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
                slideUp: { '0%': { transform: 'translateY(20px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
            },
        },
    },
    plugins: [],
};