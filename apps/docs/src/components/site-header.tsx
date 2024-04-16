import { Button } from "@dv/ui/components"
import { Command } from "@dv/ui/icons"
import { useEffect, useState } from "react"
import { MainNav } from "./main-nav"
import { SearchDialog } from "./search-dialog"

export function SiteHeader() {
	const [open, setOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<MainNav />
				{/* <MobileNav /> */}

				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<Button
							variant="outline"
							onPress={() => {
								setOpen(true)
							}}
							className={"self-end text-subtle-foreground"}
						>
							Search... <Command size={"1rem"} /> K
						</Button>
						<SearchDialog open={open} handleOpenChange={setOpen} />
					</div>
				</div>
			</div>
		</header>
	)
}
