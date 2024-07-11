const isDev = process.argv.indexOf("dev") !== -1
const isBuild = process.argv.indexOf("build") !== -1

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
	process.env.VELITE_STARTED = "1"
	const { build } = await import("velite")
	await build({ watch: isDev, clean: !isDev })
}

if (isDev || isBuild) {
	const { generateExamplesIndex } = await import("./generate-examples.mjs")

	generateExamplesIndex()
}
/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	transpilePackages: ["@pixelshades/ui", "@pixelshades/styles", "@pixelshades/utils"],
}

export default nextConfig
