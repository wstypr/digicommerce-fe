/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef5ff',
                    100: '#d9e7ff',
                    200: '#bcd6ff',
                    300: '#8ebcff',
                    400: '#5997ff',
                    500: '#2e6dff',
                    600: '#1b4ef5',
                    700: '#143ae1',
                    800: '#1730b6',
                    900: '#192e8f',
                    950: '#141e57',
                },
                secondary: {
                    50: '#f4f4f6',
                    100: '#ebebee',
                    200: '#dbdbe2',
                    300: '#c3c4cd',
                    400: '#a5a5b5',
                    500: '#908fa2',
                    600: '#817e92',
                    700: '#747184',
                    800: '#625f6e',
                    900: '#514f59',
                    950: '#333239',
                },
            },
        },
    },
    plugins: [],
};
