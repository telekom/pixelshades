import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import VeliteVitePlugin from "./vite-plugins/velite-plugin"

import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import tsconfigPaths from "vite-tsconfig-paths"
import dvUiVitePlugin from "./vite-plugins/dv-ui-plugin/dv-ui-plugin"

import path from "node:path"

export default defineConfig({
	resolve: {
		alias: {
			"@pixelshades/ui": path.resolve(__dirname, "../../packages/ui/src"),
			"@pixelshades/styles/components": path.resolve(__dirname, "../../packages/styles/src/components"),
			"@pixelshades/auto-form": path.resolve(__dirname, "../../packages/auto-form/src"),
			// Add more package aliases as needed
		},
	},
	optimizeDeps: {
		exclude: ["@pixelshades/ui"],
	},
	plugins: [VeliteVitePlugin(), tsconfigPaths(), react(), dvUiVitePlugin(), TanStackRouterVite()],
})
