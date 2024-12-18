import { defineConfig } from 'vite';
import circleDependency from 'vite-plugin-circular-dependency';

export default defineConfig({
    base: '/AH-ContactList/',
    plugins: [circleDependency()],
});
