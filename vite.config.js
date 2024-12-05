import { defineConfig } from 'vite';
import circleDependency from 'vite-plugin-circular-dependency';

export default defineConfig({
    base: '/AH-ContactList/',
    plugins: [circleDependency()],
    resolve: {
        // alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        // __IS_DEV__: JSON.stringify(true),
        // __API__: JSON.stringify('http://localhost:8000'),
        // __PROJECT__: JSON.stringify('frontend'),
    },
});
