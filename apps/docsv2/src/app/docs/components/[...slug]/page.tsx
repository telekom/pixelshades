import { Heading, HeadingLevel, If, Tab, TabPanel, TableOfContents, Tabs, TabsList } from "@pixelshades/ui/components"
import { IconBrandAdobe, IconBrandGithub } from "@pixelshades/ui/icons"
import { cn } from "@pixelshades/utils/styles"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXContent } from "~/components/mdx-content"
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
			<main className={"prose lg:prose-lg dark:prose-invert flex flex-col gap-lg py-6"}>
				<div>
					<Heading className="mb-4">{component.title}</Heading>

					<p className="text-subtle-foreground">{component.description}</p>

					<div className="my-layout-md">
						{/* <DataList>
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
								{(docLink) => (
									<DataListItem>
										<DataListLabel>Aria Docs</DataListLabel>
										<DataListValue>
											<IconBrandAdobe className="size-3" />
											<Link
												className="text-foreground"
												href={docLink}
												target="_blank"
												rel="noreferrer"
											>
												View Docs
											</Link>
										</DataListValue>
									</DataListItem>
								)}
							</If>
						</DataList> */}
					</div>
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
						<div className="sticky top-16 col-span-3 hidden self-start md:block">
							<If condition={component.toc.length > 0}>
								<TableOfContents toc={component.toc} />
							</If>
						</div>
					</TabPanel>
					{/* <Tabs.Panel id="props" className="w-full">
						<PropsTable slug={component.slug} />
					</Tabs.Panel> */}
				</Tabs>
			</main>
		</HeadingLevel>
	)
}
