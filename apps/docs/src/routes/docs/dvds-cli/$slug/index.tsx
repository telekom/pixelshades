import { dvds_pages } from "#site/content"

import { Heading, HeadingLevel, Typography } from "@dv/ui/components"

import { createFileRoute, notFound } from "@tanstack/react-router"
import { MDXContent } from "~/components/mdx-content"

interface PostProps {
	params: {
		slug: string
	}
}

export const Route = createFileRoute("/docs/dvds-cli/$slug/")({
	loader: (ctx) => {
		const component = getComponentBySlug(ctx.params.slug)

		return { component }
	},
	component: DocsPage,
})

function getComponentBySlug(slug: string) {
	return dvds_pages.find((component) => component.slug === slug)
}

export default function DocsPage({ params }: PostProps) {
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
			</main>
		</HeadingLevel>
	)
}
