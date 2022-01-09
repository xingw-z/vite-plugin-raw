import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({
    beforeWriteFile: (filePath: string, content: string) => {
      const  newFilePath = filePath.replace('src/', '')
      return {
        filePath: newFilePath,
        content
      }
    }
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'vite-plugin-raw',
      formats: ['cjs'],
      fileName: (format) => 'index.js',
    }
  }
})
