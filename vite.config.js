import { defineConfig } from 'vite';

import laravel from 'laravel-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import dynamicImport from 'vite-plugin-dynamic-import'


export default defineConfig({
    plugins: [
        vue(),
        dynamicImport(),
        VitePWA(),
        laravel([
            'resources/css/app.css',
            'resources/ts/app.ts',
        ]),
    ],
});
