import { visit } from "unist-util-visit"
import type { UnistNode, UnistTree } from "./types/units"

export const preProcess = () => (tree: UnistTree) => {
	visit(tree, "element", (node: UnistNode) => {
		if (node?.type === "element" && node?.tagName === "pre") {
			if (!node.children || node.children.length === 0) {
				return
			}

			const [codeEl] = node.children

			if (codeEl?.tagName !== "code") {
				return
			}

			node.properties!.__rawString__ = codeEl.children?.at(0)?.value
		}
	})
}

export const postProcess = () => (tree: UnistTree) => {
	visit(tree, "element", (node: UnistNode) => {
		if (node?.type === "element" && node?.tagName === "figure") {
			if (!node.properties || !("data-rehype-pretty-code-figure" in node.properties)) {
				return
			}

			// Get pre element
			const preElement = node.children?.find((child: UnistNode) => child.tagName === "pre")

			if (preElement?.tagName !== "pre") {
				return
			}

			if (preElement?.properties) {
				if (node.properties.__rawString__) {
					preElement.properties = { ...node.properties, ...preElement.properties }
				}

				preElement.properties.__rawString__ = node.properties.raw as string
			}
		}
	})
}

export function rehypeNpmCommand() {
	return (tree: UnistTree) => {
		visit(tree, (node: UnistNode) => {
			if (node.type !== "element" || node?.tagName !== "pre") {
				return
			}

			if (!node.children || node.children.length === 0) {
				return
			}

			const [codeEl] = node.children
			if (codeEl.tagName !== "code") {
				return
			}

			// npm install.
			if (node.properties?.__rawString__?.startsWith("npm install")) {
				const npmCommand = node.properties?.__rawString__
				node.properties.__npmCommand__ = npmCommand
				node.properties.__yarnCommand__ = npmCommand.replace("npm install", "yarn add")
				node.properties.__pnpmCommand__ = npmCommand.replace("npm install", "pnpm add")
				node.properties.__bunCommand__ = npmCommand.replace("npm install", "bun add")
			}

			// npx create.
			if (node.properties?.__rawString__?.startsWith("npx create-")) {
				const npmCommand = node.properties?.__rawString__
				node.properties.__npmCommand__ = npmCommand
				node.properties.__yarnCommand__ = npmCommand.replace("npx create-", "yarn create ")
				node.properties.__pnpmCommand__ = npmCommand.replace("npx create-", "pnpm create ")
				node.properties.__bunCommand__ = npmCommand.replace("npx", "bunx --bun")
			}

			// npx.
			if (
				node.properties?.__rawString__?.startsWith("npx") &&
				!node.properties?.__rawString__?.startsWith("npx create-")
			) {
				const npmCommand = node.properties?.__rawString__
				node.properties.__npmCommand__ = npmCommand
				node.properties.__yarnCommand__ = npmCommand
				node.properties.__pnpmCommand__ = npmCommand.replace("npx", "pnpm dlx")
				node.properties.__bunCommand__ = npmCommand.replace("npx", "bunx --bun")
			}
		})
	}
}
