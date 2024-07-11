"use client"

import { Badge } from "@pixelshades/ui/components"
import { cn } from "@pixelshades/utils/styles"
import { Link } from "@tanstack/react-router"
import type { SidebarNavItem } from "~/config/docs"

export interface DocsSidebarNavProps {
	items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
	return items.length ? (
		<div className="w-full">
			{items.map((item, index) => (
				<div key={index} className={cn("pb-4")}>
					<h4 className="mb-1 rounded-md px-2 py-1 font-semibold text-sm">{item.title}</h4>
					{item?.items?.length && <DocsSidebarNavItems items={item.items} />}
				</div>
			))}
		</div>
	) : null
}

interface DocsSidebarNavItemsProps {
	items: SidebarNavItem[]
}

export function DocsSidebarNavItems({ items }: DocsSidebarNavItemsProps) {
	return items?.length ? (
		<div className="grid grid-flow-row auto-rows-max text-sm">
			{items.map((item) =>
				item.href && !item.disabled ? (
					<Link
						key={item.href}
						to={item.href as any}
						className={cn(
							"group flex w-full items-center justify-between rounded-md border border-transparent px-2 py-1 text-subtle-foreground hover:underline",
							item.disabled && "cursor-not-allowed opacity-60",
						)}
						activeProps={{
							className: "font-medium !text-foreground",
						}}
						target={item.external ? "_blank" : ""}
						rel={item.external ? "noreferrer" : ""}
					>
						{item.title}
						{item.label && <Badge size="sm">{item.label}</Badge>}
					</Link>
				) : (
					<span
						key={item.href}
						className={cn(
							"flex w-full cursor-not-allowed items-center rounded-md p-2 text-subtle-foreground hover:underline",
							item.disabled && "cursor-not-allowed opacity-60",
						)}
					>
						{item.title}
						{item.label && <Badge size="sm">{item.label}</Badge>}
					</span>
				),
			)}
		</div>
	) : null
}
