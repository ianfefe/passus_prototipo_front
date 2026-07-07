import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url' // 1. Importa os métodos de URL necessários para ESM
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// 2. Cria uma alternativa segura ao __dirname para projetos estruturados em "type": "module"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // Base do repositório mapeada perfeitamente pro GitHub Pages
  base: '/prototipo_propus_case/',
  
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // O apelido @ agora vai funcionar perfeitamente sem quebrar no ESM
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Suporte a importações brutas
  assetsInclude: ['**/*.svg', '**/*.csv'],
})