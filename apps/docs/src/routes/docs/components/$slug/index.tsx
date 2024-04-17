import { components } from "#site/content"

import {
	DataList,
	DataListItem,
	DataListLabel,
	DataListValue,
	Heading,
	HeadingLevel,
	If,
	Link,
	Tab,
	TabPanel,
	TableOfContents,
	Tabs,
	TabsList,
	Typography,
} from "@dv/ui/components"
import { GithubIcon } from "@dv/ui/icons"
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

	console.log(component.toc)

	return (
		<HeadingLevel>
			<main className={"prose lg:prose-lg dark:prose-invert flex flex-col gap-lg py-6"}>
				<div>
					<Heading className="mb-4">{component.title}</Heading>

					<Typography className="text-subtle-foreground">{component.description}</Typography>

					<div className="my-layout-md">
						<DataList>
							<DataListItem>
								<DataListLabel>Import</DataListLabel>
								<DataListValue>
									<code>
										import {"{ "}
										{component.title}
										{" }"} from "@dv/ui/components"
									</code>
								</DataListValue>
							</DataListItem>
							<DataListItem>
								<DataListLabel>Source</DataListLabel>
								<DataListValue>
									<GithubIcon className="size-3" />
									<Link
										className="text-foreground"
										href={`https://github.com/telekom/pixelshades/tree/main/packages/ui/src/components/ui/${component.slug}`}
									>
										View Source Code
									</Link>
								</DataListValue>
							</DataListItem>
							<If condition={component.docLink}>
								{(docLink) => (
									<DataListItem>
										<DataListLabel>Aria Docs</DataListLabel>
										<DataListValue>
											<AdopeLogo className="size-3" />
											<Link className="text-foreground" href={docLink}>
												View Docs
											</Link>
										</DataListValue>
									</DataListItem>
								)}
							</If>
						</DataList>
					</div>
				</div>

				<Tabs variant="pill">
					<TabsList className="mb-layout-xs">
						<Tab id="docs">Docs</Tab>
						<Tab id="props">Props</Tab>
					</TabsList>

					<TabPanel id="docs" className={cn("relative grid w-full grid-cols-12 gap-layout-sm")}>
						<div className="col-span-9 w-full">
							<MDXContent code={component.content} />
						</div>
						<div className="sticky top-16 col-span-3 self-start">
							<If condition={component.toc.length > 0}>
								<TableOfContents toc={component.toc} />
							</If>
						</div>
					</TabPanel>
					<TabPanel id="props" className="w-full">
						<PropsTable slug={component.slug} />
					</TabPanel>
				</Tabs>
			</main>
		</HeadingLevel>
	)
}
