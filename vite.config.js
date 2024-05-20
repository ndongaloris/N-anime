import { resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { dirname } from "path"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html")
      }
    }
  }
});
