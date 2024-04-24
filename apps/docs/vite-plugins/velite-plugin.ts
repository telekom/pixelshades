import { build } from "velite"; // assuming `velite` exports a `build` function
import type { Plugin, ResolvedConfig } from "vite";

interface VeliteOptions {
	watch?: boolean;
	clean?: boolean;
}

function VeliteVitePlugin(options: VeliteOptions = {}): Plugin {
	let started = false;

	return {
		name: "velite-vite-plugin",
		async configResolved(config: ResolvedConfig) {
			if (started) return;
			started = true;
			const dev = config.mode === "development";
			options.watch = options.watch ?? dev;
			options.clean = options.clean ?? !dev;
			await build(options); // start velite
		},
	};
}

export default VeliteVitePlugin;
