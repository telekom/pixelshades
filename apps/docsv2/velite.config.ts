import { defineConfig, s } from "velite"

import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"

import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"
import { appendCodePreview } from "~/lib/rehype/append-code-preview"
import { postProcess, preProcess, rehypeNpmCommand } from "~/lib/rehype/rehype-npm-command"
import { beautifyObjectName } from "~/lib/utils"

export default defineConfig({
	collections: {
		components: {
			name: "Components",
			pattern: "components/**/*.mdx",
			schema: s
				.object({
					description: s.string(),
					content: s.mdx(),
					docLink: s.string().optional(),
					apiReferenceLink: s.string().optional(),
					toc: s.toc(),
					primaryTag: s.string().optional(),
					path: s.path(),
				})
				.transform((data) => {
					const breadcrumbs = data.path.split("/").map((crumb, index, array) => {
						return {
							name: beautifyObjectName(crumb),
							crumb: crumb,
							url: `/docs/${array.slice(0, index + 1).join("/")}`,
						}
					})

					return {
						...data,
						permalink: `/docs/${data.path}`,
						breadcrumbs,
						title: breadcrumbs[breadcrumbs.length - 1].name,
					}
				}),
		},
		general_pages: {
			name: "GettingStarted",
			pattern: "getting_started/**/*.mdx",
			schema: s
				.object({
					title: s.string().max(99),
					description: s.string(),
					content: s.mdx(),
					toc: s.toc(),
					sortingIndex: s.number().optional(),
					path: s.path(),
				})
				.transform((data) => {
					const breadcrumbs = data.path.split("/").map((crumb, index, array) => {
						return {
							name: beautifyObjectName(crumb),
							crumb: crumb,
							url: `/docs/${array.slice(0, index + 1).join("/")}`,
						}
					})

					return {
						...data,
						permalink: `/docs/${data.path}`,
						breadcrumbs,
						title: breadcrumbs[breadcrumbs.length - 1].name,
					}
				}),
		},
	},
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			preProcess,
			rehypeSlug,
			rehypeAutolinkHeadings,
			appendCodePreview,
			rehypeNpmCommand,
			[
				rehypePrettyCode,
				{
					theme: "github-dark",
					defaultLang: {
						block: "tsx",
					},
					grid: true,
				},
			],
			postProcess,
		],
	},
	markdown: {},
})
