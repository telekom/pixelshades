import { Breadcrumb, Breadcrumbs, Heading, HeadingLevel, Typography } from "@pixelshades/ui/components"

import { cn } from "@pixelshades/cn"

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXContent } from "~/components/mdx-content"
import { TableOfContents } from "~/components/toc"
import { general_pages } from "#site/content"

interface PageProps {
	params: {
		slug: string[]
	}
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const doc = general_pages.find((component) => component.path === `getting_started/${params.slug.join("/")}`)

	if (!doc) {
		return {}
	}

	return {
		title: doc.title,
		description: doc.description,
	}
}

export const generateStaticParams = async () => {
	const pages = general_pages.map((page) => ({
		slug: page.breadcrumbs.slice(1).map((crumb) => crumb.crumb),
	}))

	return pages
}

export default function ComponentPage({ params }: PageProps) {
	const page = general_pages.find((component) => component.path === `getting_started/${params.slug.join("/")}`)

	if (!page) {
		return notFound()
	}

	return (
		<HeadingLevel>
			<main
				className={cn("relative pb-layout-md lg:gap-layout-lg", {
					"xl:grid xl:grid-cols-[1fr_220px]": page.toc.length > 0,
				})}
			>
				<div className="w-full min-w-0 space-y-layout-sm pt-layout-sm">
					<Breadcrumbs>
						{page.breadcrumbs.map((breadcrumb, index) => (
							<Breadcrumb
								key={index}
								linkProps={{
									href: breadcrumb.url,
								}}
							>
								{breadcrumb.name}
							</Breadcrumb>
						))}
					</Breadcrumbs>
					<div>
						<Heading className="mb-lg">{page.title}</Heading>

						<Typography className="text-subtle-foreground">{page.description}</Typography>
					</div>

					<MDXContent code={page.content} />
				</div>
				<div className="sticky top-14 hidden max-h-screen overflow-y-auto xl:block">
					<div className="pt-layout-sm pb-layout-md text-sm">
						<TableOfContents toc={page.toc} />
					</div>
				</div>
			</main>
		</HeadingLevel>
	)
}
