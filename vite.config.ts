import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: resolve(__dirname, "src/api"),
      components: resolve(__dirname, "src/components"),
      hooks: resolve(__dirname, "src/hooks"),
      types: resolve(__dirname, "src/types"),
      utils: resolve(__dirname, "src/utils"),
      state: resolve(__dirname, "src/state"),
      theme: resolve(__dirname, "src/theme"),
      translations: resolve(__dirname, "src/translations"),
      router: resolve(__dirname, "src/router"),
    },
  },
});
