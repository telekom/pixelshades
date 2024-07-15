import type { Metadata } from "next"
import { DocsSidebar } from "~/components/navigation/docs-sidebar"
import { SearchDialog } from "~/components/search-dialog"
import { sidebarItems } from "~/lib/data"

interface DocsLayoutProps {
	children: React.ReactNode
}

export const metadata: Metadata = {
	title: {
		template: "%s | Pixelshades",
		default: "Pixelshades",
	},
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	return (
		<div className="min-h-[90vh]">
			<div className="container items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-lg">
				<aside className="hidden space-y-md pt-layout-sm md:sticky md:top-14 md:block">
					<SearchDialog />
					<div className="h-[90vh] overflow-y-auto">
						<DocsSidebar items={sidebarItems} />
					</div>
				</aside>
				{children}
			</div>
		</div>
	)
}
