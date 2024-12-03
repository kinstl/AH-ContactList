import { defineConfig } from 'vite';

export default defineConfig({
    base: '/AH-ContactList/',
    // plugins: [svgr({ exportAsDefault: true }), react()],
    resolve: {
        // alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        // __IS_DEV__: JSON.stringify(true),
        // __API__: JSON.stringify('http://localhost:8000'),
        // __PROJECT__: JSON.stringify('frontend'),
    },
});
