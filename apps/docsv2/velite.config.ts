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
					const breadcrumbs = data.path.split("/")

					return {
						...data,
						permalink: `/docs/${data.path}`,
						breadcrumbs,
						title: beautifyObjectName(breadcrumbs[breadcrumbs.length - 1]),
					}
				}),
		},
		general_pages: {
			name: "GeneralPages",
			pattern: "general/**/*.mdx",
			schema: s
				.object({
					title: s.string().max(99),
					description: s.string(),
					slug: s.slug("docs"),
					content: s.mdx(),
					toc: s.toc(),
					sortingIndex: s.number().optional(),
				})
				.transform((data) => ({ ...data, permalink: `/docs/${data.slug}` })),
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
