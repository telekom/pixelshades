import fs from "node:fs"
import path from "node:path"

export const generateExamplesIndex = (examplesDir = path.resolve("src/examples")) => {
	console.info("🍋 🚀 Generating component examples...")

	let indexContent = `/* eslint-disable @typescript-eslint/ban-ts-comment */
  /* -------------------------------------------------------------------------- */
  /*                    GENERATED FILE, DO NOT EDIT MANUALLY!                   */
  /* -------------------------------------------------------------------------- */
  import { lazy, type LazyExoticComponent } from "react";
  
  type Demo = {
	component: LazyExoticComponent<() => JSX.Element>;
	code: string;
  };
  
  export const Demos: Record<string, Demo> = {
  `

	const sluggify = (str: string): string => str.replace(/[\s_]+/g, "-").replace(/[^\w-]+/g, "")

	const processDirectory = (dir: string, prefix = "") => {
		const entries = fs.readdirSync(dir)

		// biome-ignore lint/complexity/noForEach: <explanation>
		entries.forEach((entry) => {
			if (entry === "index.ts") {
				return
			}

			const fullPath = path.join(dir, entry)
			const stat = fs.statSync(fullPath)

			if (!fullPath.startsWith(examplesDir)) {
				throw new Error("Invalid path detected")
			}

			if (stat.isFile() && /\.(j|t)sx?$/.test(entry)) {
				const slug = sluggify(path.basename(entry, path.extname(entry)))
				const key = prefix + slug
				const relativePath = `~/examples/${path.relative(examplesDir, fullPath).replace(/\\/g, "/")}`

				const fileContents = fs
					.readFileSync(fullPath, "utf8")
					.replace(/`/g, "\\`")
					.replace("export default function", "export function")

				indexContent += `  "${key}": {
	  component: lazy(() => import("${relativePath}")),
	  code: \`${fileContents}\`,\n  },\n`
			} else if (stat.isDirectory()) {
				processDirectory(fullPath, `${sluggify(entry)}/`)
			}
		})
	}

	processDirectory(examplesDir)
	indexContent += "};"

	const indexPath = path.join(examplesDir, "index.ts")
	// rimraf.sync(indexPath)
	fs.writeFileSync(indexPath, indexContent)

	console.info("✅ Component examples generated!")
}
