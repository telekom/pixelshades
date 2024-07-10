import { u } from "unist-builder"
import { visit } from "unist-util-visit"
import { Demos } from "~/examples"
import type { UnistNode, UnistTree } from "./types/units"

function getNodeAttributeByName(node: UnistNode, name: string) {
	return node.attributes?.find((attribute) => attribute.name === name)
}

export const appendCodePreview = () => (tree: UnistTree) => {
	visit<UnistNode, "element">(tree, (node: UnistNode) => {
		if (node.name === "ComponentPreview") {
			const nameAttribute = getNodeAttributeByName(node, "name")
			const code = nameAttribute ? Demos[nameAttribute?.value as keyof typeof Demos]?.code ?? "" : ""

			node.children?.push(
				u("element", {
					tagName: "pre",
					properties: {
						raw: code,
					},
					raw: code,
					children: [
						u("element", {
							tagName: "code",
							data: { meta: "showLineNumbers" },
							properties: {
								className: ["language-tsx"],
							},
							children: [
								{
									type: "text",
									value: code,
								},
							],
						}),
					],
				}) as unknown as UnistNode,
			)
		}
	})
}
