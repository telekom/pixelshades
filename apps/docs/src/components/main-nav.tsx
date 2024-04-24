import { cn } from "@pixelshades/utils/styles"
import { siteConfig } from "~/config/site"

import { FlameIcon } from "@pixelshades/ui/icons"
import { Link } from "@tanstack/react-router"

export function MainNav() {
	return (
		<div className="mr-4 hidden md:flex md:justify-between">
			<Link to="/" className="mr-6 flex items-center space-x-2">
				<FlameIcon className="size-6 text-primary" />
				<span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
			</Link>
			<nav className="flex items-center gap-md text-sm">
				<Link
					to="/docs"
					className={cn("text-subtle-foreground transition-colors hover:text-foreground/80")}
					activeProps={{
						className: "!text-foreground",
					}}
				>
					Docs
				</Link>

				<Link
					to="/examples"
					className={cn("text-subtle-foreground transition-colors hover:text-foreground/80")}
					activeProps={{
						className: "!text-foreground",
					}}
				>
					Examples
				</Link>
			</nav>
		</div>
	)
}
