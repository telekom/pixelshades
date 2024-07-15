import { cn } from "@pixelshades/cn"
import { siteConfig } from "~/config/site"

import { Link } from "@pixelshades/ui/components"
import { IconFlame } from "@pixelshades/ui/icons"

export function MainNav() {
	return (
		<div className="container mr-lg hidden md:flex md:justify-between">
			<Link href="/" className="mr-xl flex items-center space-x-md">
				<IconFlame className="size-6 text-primary" />
				<span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
			</Link>
			<nav className="flex items-center gap-md text-sm">
				<Link
					href="/docs"
					className={cn("text-subtle-foreground transition-colors hover:text-foreground/80")}
					// activeProps={{
					// 	className: "!text-foreground",
					// }}
				>
					Docs
				</Link>

				<Link
					href="/examples"
					className={cn("text-subtle-foreground transition-colors hover:text-foreground/80")}
					// activeProps={{
					// 	className: "!text-foreground",
					// }}
				>
					Examples
				</Link>
			</nav>
		</div>
	)
}
