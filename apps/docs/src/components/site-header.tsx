import { Button } from "@pixelshades/ui/components";
import { Command } from "@pixelshades/ui/icons";
import { useState } from "react";
import { MainNav } from "./main-nav";
import { SearchDialog } from "./search-dialog";
import ThemeSwitch from "./theme-switcher";

export function SiteHeader() {
	const [open, setOpen] = useState(false);

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
								setOpen(true);
							}}
							className={"self-end text-subtle-foreground"}
							after={
								<span className="ml-md flex items-center text-sm text-subtle-foreground">
									<Command size={"1rem"} /> + K
								</span>
							}
						>
							Search...
						</Button>
						<SearchDialog open={open} handleOpenChange={setOpen} />
					</div>
					<ThemeSwitch />
				</div>
			</div>
		</header>
	);
}
