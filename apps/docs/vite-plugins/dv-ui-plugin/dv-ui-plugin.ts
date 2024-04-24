import path from "node:path";
import type { ViteDevServer } from "vite";
import { generateExamplesIndex } from "./generate-examples";

export default function dvUiVitePlugin() {
	const examplesDir = path.resolve("src/examples");

	return {
		name: "example-component-watcher",

		configureServer(server: ViteDevServer) {
			const indexFile = path.join(examplesDir, "index.ts");

			server.watcher.add(examplesDir);
			server.watcher.on("change", (file) => {
				const relativePath = path.relative(examplesDir, file);

				if (!relativePath.startsWith("..") && file !== indexFile) {
					const trimmedPath = file.split("/examples/").pop();

					console.info(`📁💫 Example file changed: ${trimmedPath} ✔️`);

					generateExamplesIndex();
					server.hot.send({ type: "full-reload" });
				}
			});
		},
		buildStart() {
			generateExamplesIndex();
		},
	};
}
