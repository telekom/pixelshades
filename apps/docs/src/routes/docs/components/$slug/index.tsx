import { components } from "#site/content"

import {
	DataList,
	Heading,
	HeadingLevel,
	If,
	Link,
	TableOfContents,
	Tabs,
	Typography,
} from "@pixelshades/ui/components"
import { GithubIcon } from "@pixelshades/ui/icons"
import { cn } from "@pixelshades/utils/styles"

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

					<div className="my-layout-md">
						<DataList>
							<DataList.Item>
								<DataList.Label>Import</DataList.Label>
								<DataList.Value>
									<code>
										import {"{ "}
										{component.title.replace(/\s/g, "")}
										{" }"} from "@pixelshades/ui/components"
									</code>
								</DataList.Value>
							</DataList.Item>
							<DataList.Item>
								<DataList.Label>Source</DataList.Label>
								<DataList.Value>
									<GithubIcon className="size-3" />
									<Link
										className="text-foreground"
										href={`https://github.com/telekom/pixelshades/tree/main/packages/ui/src/components/ui/${component.slug}`}
									>
										View Source Code
									</Link>
								</DataList.Value>
							</DataList.Item>
							<If condition={component.docLink}>
								{(docLink) => (
									<DataList.Item>
										<DataList.Label>Aria Docs</DataList.Label>
										<DataList.Value>
											<AdopeLogo className="size-3" />
											<Link className="text-foreground" href={docLink}>
												View Docs
											</Link>
										</DataList.Value>
									</DataList.Item>
								)}
							</If>
						</DataList>
					</div>
				</div>

				<Tabs variant="pill">
					<Tabs.List className="mb-layout-xs">
						<Tabs.Tab id="docs">Docs</Tabs.Tab>
						<Tabs.Tab id="props">Props</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel id="docs" className={cn("relative grid w-full grid-cols-12 gap-layout-sm")}>
						<div className="col-span-9 w-full">
							<MDXContent code={component.content} />
						</div>
						<div className="sticky top-16 col-span-3 hidden self-start md:block">
							<If condition={component.toc.length > 0}>
								<TableOfContents toc={component.toc} />
							</If>
						</div>
					</Tabs.Panel>
					<Tabs.Panel id="props" className="w-full">
						<PropsTable slug={component.slug} />
					</Tabs.Panel>
				</Tabs>
			</main>
		</HeadingLevel>
	)
}
