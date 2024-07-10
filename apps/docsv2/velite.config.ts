import { defineConfig, s } from "velite"

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
					primaryTag: s.string().optional(),
					path: s.path(),
				})
				.transform((data) => ({ ...data, permalink: `/docs/${data.path}`, breadcrumbs: data.path.split("/") })),
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
			rehypeSlug,
			rehypeAutolinkHeadings,

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
		],
	},
	markdown: {},
})
