

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins: [
        vue(),
        VitePWA({ registerType: 'autoUpdate',injectRegister: 'auto' }),
         laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
