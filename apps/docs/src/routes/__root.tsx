import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";
import { ThemeProvider } from "~/provider/theme-provider";

import { ScrollRestoration } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<>
			<ScrollRestoration getKey={(location) => location.pathname} />

			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<div vaul-drawer-wrapper="">
					<div className="relative flex min-h-screen flex-col bg-background font-sans">
						<SiteHeader />
						<main className="flex-1">
							<Outlet />
						</main>
						<SiteFooter />
					</div>
				</div>
			</ThemeProvider>
			<TanStackRouterDevtools />
		</>
	),
});
