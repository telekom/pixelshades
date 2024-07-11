"use client"

import { useState } from "react"
import { ThemeSwitch } from "../theme-switcher"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
	const [open, setOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center gap-layout-xs">
				<MainNav />
				<MobileNav />

				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:min-w-min md:flex-none">
						{/* <SearchDialog open={open} handleOpenChange={setOpen} /> */}
					</div>
					<ThemeSwitch />
				</div>
			</div>
		</header>
	)
}
