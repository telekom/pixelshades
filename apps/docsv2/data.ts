import { createSource } from "mdxts"

type FrontMatter = {
	title: string
	date: Date
	summary?: string
	tags?: any
}

export const allPosts = createSource<{
	frontMatter: FrontMatter
}>("posts/*.mdx", {
	baseDirectory: "posts",
	sort: (a, b) => b.frontMatter.date.getTime() - a.frontMatter.date.getTime(),
})

export const autoFormExample = createSource("../../packages/ui/src/**/*.{ts,tsx}", {
	baseDirectory: "../../packages/ui/src",
	basePathname: "packages",
})

console.log(autoFormExample.all())
