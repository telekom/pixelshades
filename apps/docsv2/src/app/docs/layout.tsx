import { DocsSidebar } from "~/components/docs-sidebar"

import { components, dvds_pages } from "#site/content"

interface DocsLayoutProps {
	children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	const allComponents = components
	return (
		<div className="min-h-[90vh] border-b">
			<div className="container items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6">
				<aside className="z-30 hidden space-y-2 pt-6 md:sticky md:top-0 md:block">
					{/* <SearchDocs />
					<ScrollArea className="h-screen pb-8">
						<DocsSidebar items={docsConfig.nav} />
					</ScrollArea> */}
				</aside>
				{children}
			</div>
		</div>
	)
}
