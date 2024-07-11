"use client"

import { cn } from "@pixelshades/cn"
import { IconChevronRight } from "@pixelshades/ui/icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect } from "react"
import type { DocsNav, Category as TCategory } from "~/types/docs-nav"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../temp/collapsible"

export interface DocsSidebarProps {
	items: DocsNav
}

export function DocsSidebar({ items }: DocsSidebarProps) {
	const pathname = usePathname()

	if (items.length === 0) {
		return null
	}

	return (
		<div className="w-full space-y-4 pt-4 pr-4 pb-10 text-sm">
			{items.map((item, index) => (
				<Category key={index} title={item.title} items={item.items} slug={item.slug} pathname={pathname} />
			))}
		</div>
	)
}

interface CategoryProps extends TCategory {
	pathname: string
}

const Category = ({ title, slug, items, pathname }: CategoryProps) => {
	const [open, setOpen] = React.useState(pathname.startsWith(`/${slug}`))

	useEffect(() => {
		setOpen(pathname.replace("/docs", "").startsWith(`/${slug}`))
	}, [pathname, slug])

	return (
		<Collapsible open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger className="flex items-center space-x-md [&[data-state=open]>svg]:rotate-90">
				<IconChevronRight className="size-4 shrink-0 transition-transform duration-200" />
				<h4 className="rounded-md font-semibold text-sm">{title}</h4>
			</CollapsibleTrigger>
			<CollapsibleContent asChild className="space-y-md pt-md">
				<ul>
					{items.map((item, index) => {
						if ("href" in item && item.href) {
							return (
								<li key={index}>
									<Link
										href={item.href}
										className={cn(
											"group ml-md block border-border border-l pl-4 text-subtle-foreground transition-colors hover:text-foreground",
											{
												"border-border font-medium text-foreground": pathname === item.href,
											},
										)}
									>
										<span className="block duration-100 group-hover:translate-x-0.5">
											{item.title}
										</span>
									</Link>
								</li>
							)
						}
						if ("items" in item && item.items.length > 0) {
							return (
								<li key={index} className="ml-md space-y-md">
									<h3 className="category pl-lg font-mono text-foreground text-xs tracking-widest">
										{item.title}
									</h3>
									<ul className="list-none">
										{item.items.map((subItem, subIndex) => {
											if (subItem.disabled) {
												return (
													<li key={subIndex}>
														<span
															className={cn(
																"block cursor-not-allowed border-muted border-l py-xs pl-lg text-subtle-foreground",
															)}
														>
															{subItem.title}
															{subItem.tag && (
																<span className="ml-md rounded-md bg-neutral-background-disabled px-md py-0.5 text-neutral-foreground-disabled text-xs leading-none">
																	{subItem.tag}
																</span>
															)}
														</span>
													</li>
												)
											}

											return (
												<li key={subIndex}>
													<Link
														href={subItem.href || ""}
														className={cn(
															"group block border-border border-l py-xs pl-lg text-subtle-foreground transition-colors hover:text-foreground",
															{
																"border-foreground font-medium text-foreground":
																	pathname === subItem.href,
															},
														)}
													>
														<span className="block transition-transform duration-100 group-hover:translate-x-0.5">
															{subItem.title}
															{subItem.tag && (
																<span className="ml-md rounded-md border bg-neutral-background px-md py-0.5 text-subtle-foreground text-xs leading-none">
																	{subItem.tag}
																</span>
															)}
														</span>
													</Link>
												</li>
											)
										})}
									</ul>
								</li>
							)
						}
					})}
				</ul>
			</CollapsibleContent>
		</Collapsible>
	)
}
