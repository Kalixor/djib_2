import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      plugins: [react()],
        optimizeDeps: {
          include: ['react', 'react-dom', 'recharts']
      },
      server: {
        allowedHosts: ['djib_poc.karl-fixto.net', 'djib-poc.karl-fixto.net', 'http://localhost:5000'],
        port: 3476
	    },
      build: {
        rollupOptions: {
          onwarn(warning, warn) {
            // Suppress "Module level directives cause errors when bundled" warnings
            if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
              return;
            }
            warn(warning);
          },
        },
      },
    })
