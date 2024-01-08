import type { Config } from 'tailwindcss'
import forms from "@tailwindcss/forms"
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: ["./src/**/*.{tsx, ts, html}",
        "./public/*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Lato', ...defaultTheme.fontFamily.sans],
            },
        }
    },
    plugins: [forms,],
} satisfies Config

