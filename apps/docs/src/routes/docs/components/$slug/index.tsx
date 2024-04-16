import { components } from "#site/content"

import {
	Badge,
	Heading,
	HeadingLevel,
	If,
	Tab,
	TabPanel,
	TableOfContents,
	Tabs,
	TabsList,
	Typography,
} from "@dv/ui/components"
import { ExternalLinkIcon } from "@dv/ui/icons"
import { cn } from "@dv/ui/utils"

import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { AdopeLogo } from "~/components/logos/adope-logo"
import { MDXContent } from "~/components/mdx-content"
import { PropsTable } from "~/components/props-table"

const componentPageSearchParams = z.object({
	tab: z.enum(["docs", "props"]).default("docs"),
})

export const Route = createFileRoute("/docs/components/$slug/")({
	validateSearch: (s) => componentPageSearchParams.parse(s),
	component: ComponentPage,
	loader: (ctx) => {
		const component = getComponentBySlug(ctx.params.slug)

		return { component }
	},
})

function getComponentBySlug(slug: string) {
	return components.find((component) => component.slug === slug)
}

function ComponentPage() {
	const { component } = Route.useLoaderData()

	if (!component) {
		return "Not Found"
	}

	return (
		<HeadingLevel>
			<main className={"prose lg:prose-lg dark:prose-invert flex flex-col gap-lg py-6"}>
				<div>
					<Heading className="mb-4">{component.title}</Heading>

					<Typography className="text-subtle-foreground">{component.description}</Typography>
				</div>

				<If condition={component.docLink}>
					<a href={component.docLink!} target="_blank" rel="noreferrer">
						<Badge
							before={<AdopeLogo className="size-3" />}
							after={<ExternalLinkIcon className="size-3" />}
							variant="outline"
						>
							Docs
						</Badge>
					</a>
				</If>
				<Tabs variant="pill">
					<TabsList className="mb-layout-xs">
						<Tab id="docs">Docs</Tab>
						<Tab id="props">Props</Tab>
					</TabsList>

					<TabPanel id="docs" className={cn("relative grid grid-cols-12 gap-layout-sm")}>
						<div className="col-span-9 w-full">
							<MDXContent code={component.content} />
						</div>
						<div className="sticky top-16 col-span-3 self-start">
							<TableOfContents toc={component.toc} />
						</div>
					</TabPanel>
					<TabPanel id="props">
						<PropsTable slug={component.slug} />
					</TabPanel>
				</Tabs>
			</main>
		</HeadingLevel>
	)
}
