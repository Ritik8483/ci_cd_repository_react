/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",   // Needed for React DOM testing
    globals: true,          // So you can use test(), expect() without importing
    setupFiles: "./setupTests.js",
  },
});
