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
	Tabs,
	TabsList,
	Typography,
} from "@pixelshades/ui/components"

import { IconBrandAdobe, IconBrandGithub } from "@pixelshades/ui/icons"
import { cn } from "@pixelshades/utils/styles"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXContent } from "~/components/mdx-content"
import { TableOfContents } from "~/components/toc"
import { components } from "#site/content"

interface PageProps {
	params: {
		slug: string[]
	}
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const doc = components.find((component) => component.path === params.slug.join("/"))

	if (!doc) {
		return {}
	}

	return {
		title: doc.title,
		description: doc.description,
	}
}

export default function ComponentPage({ params }: PageProps) {
	const component = components.find((component) => component.path === `components/${params.slug.join("/")}`)

	if (!component) {
		return notFound()
	}

	return (
		<HeadingLevel>
			<main
				className={cn("relative pt-layout-sm pb-layout-lg lg:gap-layout-sm", {
					"xl:grid xl:grid-cols-[1fr_220px]": component.toc.length > 0,
				})}
			>
				<div className="mx-auto w-full min-w-0">
					<Heading className="mb-lg">{component.title}</Heading>

					<Typography className="text-subtle-foreground">{component.description}</Typography>

					<div className="my-layout-md">
						<DataList>
							<DataListItem>
								<DataListLabel>Import</DataListLabel>
								<DataListValue>
									<code>
										import {"{ "}
										{component.title.replace(/\s/g, "")}
										{" }"} from "@pixelshades/ui/components"
									</code>
								</DataListValue>
							</DataListItem>
							<DataListItem>
								<DataListLabel>Source</DataListLabel>
								<DataListValue>
									<IconBrandGithub className="size-3" />
									<Link
										className="text-foreground"
										href={`https://github.com/telekom/pixelshades/tree/main/packages/ui/src/components/ui/${component.slug}`}
										target="_blank"
										rel="noreferrer"
									>
										View Source Code
									</Link>
								</DataListValue>
							</DataListItem>
							<If condition={component.docLink}>
								<DataListItem>
									<DataListLabel>Aria Docs</DataListLabel>
									<DataListValue>
										<IconBrandAdobe className="size-3" />
										<Link
											className="text-foreground"
											href={component.docLink}
											target="_blank"
											rel="noreferrer"
										>
											View Docs
										</Link>
									</DataListValue>
								</DataListItem>
							</If>
						</DataList>
					</div>

					<Tabs variant="pill">
						<TabsList className="mb-layout-xs">
							<Tab id="docs">Docs</Tab>
							<Tab id="props">Props</Tab>
						</TabsList>

						<TabPanel id="docs" className={cn("relative grid w-full grid-cols-12 gap-layout-sm")}>
							<div className="col-span-12 w-full md:col-span-9">
								<MDXContent code={component.content} />
								{/* <PagerButtons permalink={component.permalink} /> */}
							</div>
						</TabPanel>
						{/* <Tabs.Panel id="props" className="w-full">
						<PropsTable slug={component.slug} />
					</Tabs.Panel> */}
					</Tabs>
				</div>
				<div className="hidden text-sm xl:block">
					<div className="sticky top-0">
						<div className="h-screen pb-layout-md overflow-y-auto">
							<div className="pt-lg pb-layout-md">
								<TableOfContents toc={component.toc} />
							</div>
						</div>
					</div>
				</div>
			</main>
		</HeadingLevel>
	)
}
