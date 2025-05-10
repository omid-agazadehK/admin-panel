import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { paths } from "./src/constants/paths";

export default defineConfig({
  resolve: {
    alias: {
      ...paths.reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: `/${curr === "@" ? "src" : `src/${curr}`}`,
        }),
        ""
      ),
    },
  },
  plugins: [react()],
});
