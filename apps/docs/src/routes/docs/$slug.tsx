import { general_pages } from "#site/content"

import { Heading, HeadingLevel, Typography } from "@pixelshades/ui/components"

import { createFileRoute, notFound } from "@tanstack/react-router"
import { MDXContent } from "~/components/mdx-content"
import { PagerButtons } from "~/components/pager-buttons"

export const Route = createFileRoute("/docs/$slug")({
	component: PostPage,
	loader: (ctx) => {
		const component = getComponentBySlug(ctx.params.slug)

		return { component }
	},
})

function getComponentBySlug(slug: string) {
	return general_pages.find((component) => component.slug === slug)
}

export default function PostPage() {
	const { component } = Route.useLoaderData()

	if (!component) {
		throw notFound()
	}

	return (
		<HeadingLevel>
			<main className="prose lg:prose-lg dark:prose-invert flex flex-col gap-lg py-6">
				<div>
					<Heading className="mb-2">{component.title}</Heading>

					{component.description && <Typography>{component.description}</Typography>}
				</div>
				<hr className="" />
				<MDXContent code={component.content} />
				<PagerButtons permalink={component.permalink} />
			</main>
		</HeadingLevel>
	)
}
