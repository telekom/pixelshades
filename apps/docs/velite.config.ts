import { defineConfig, s } from "velite"

import { appendCodePreview } from "~/lib/rehype/append-code-preview"
import { postProcess, preProcess, rehypeNpmCommand } from "~/lib/rehype/rehype-npm-command"

import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"

import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

export default defineConfig({
	collections: {
		components: {
			name: "Components",
			pattern: "components/**/*.mdx",
			schema: s
				.object({
					title: s.string().max(99),
					description: s.string(),
					slug: s.slug("components"),
					content: s.mdx(),
					docLink: s.string().optional(),
					apiReferenceLink: s.string().optional(),
					toc: s.toc(),
				})
				.transform((data) => ({ ...data, permalink: `/docs/components/${data.slug}` })),
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
				})
				.transform((data) => ({ ...data, permalink: `/docs/${data.slug}` })),
		},
		dvds_pages: {
			name: "DVDSPages",
			pattern: "dvds-cli/**/*.mdx",
			schema: s
				.object({
					title: s.string().max(99),
					description: s.string().optional(),
					slug: s.slug("dvds-cli"),
					content: s.mdx(),
					toc: s.toc(),
				})
				.transform((data) => ({ ...data, permalink: `/docs/dvds-cli/${data.slug}` })),
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
