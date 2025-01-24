import { defineConfig } from "vite"; // Если используете только Vite
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/WeatherAppRedux/', // Укажите путь для GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist', // Папка для финальной сборки
    sourcemap: false, // Уменьшает размер сборки (если source maps не нужны)
  },
  server: {
    open: true, // Автоматическое открытие в браузере
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      enums: path.resolve(__dirname, "src/enums"),
      store: path.resolve(__dirname, "src/store"),
      styles: path.resolve(__dirname, "src/styles"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests", // Убедитесь, что файл существует
    mockReset: true,
  },
});
