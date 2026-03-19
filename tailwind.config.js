/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    // ใน tailwind.config.js (ส่วนที่แนะนำให้เพิ่ม)
    theme: {
        extend: {
            animation: {
                'loop-scroll': 'loop-scroll 30s linear infinite',
                'slow-fade': 'fadeIn 2s ease-in-out', // สำหรับรูปเครื่องจักร
            },
            keyframes: {
                'loop-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}