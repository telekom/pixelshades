import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@pixelshades/cn"
import { Analytics } from "safesight/react"
import { SiteHeader } from "~/components/navigation/site-header"
import { ThemeProvider } from "~/provider/theme-provider"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
	title: "Pixelshades",
	description: "Beautifully designed components ready to be used in your app. Accessible. Customizable. Open Source.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className="dark" lang="en">
			<body
				className={cn(
					GeistSans.variable,
					GeistMono.variable,
					"border-border bg-background font-sans text-foreground",
				)}
			>
				<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
					<Analytics token={"wbs_QBSp3A5tNE69tEYJ7"} />

					<div vaul-drawer-wrapper="">
						<div className="relative flex min-h-screen flex-col bg-background font-sans">
							<SiteHeader />
							<main className="flex-1">{children}</main>
							{/* <SiteFooter /> */}
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
