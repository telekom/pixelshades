"use client"

import * as React from "react"

import { cn } from "@pixelshades/utils/styles"
import { useMounted } from "../hooks/use-mounted"

interface TocEntry {
	/**
	 * Title of the entry
	 */
	title: string
	/**
	 * URL that can be used to reach
	 * the content
	 */
	url: string
	/**
	 * Nested items
	 */
	items: TocEntry[]
}

interface TocProps {
	toc: TocEntry[]
}

export function TableOfContents({ toc }: TocProps) {
	const itemIds = React.useMemo(
		() =>
			toc
				? toc
						.flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
						.flat()
						.filter(Boolean)
						.map((id) => id?.split("#")[1])
				: [],
		[toc],
	)
	const activeHeading = useActiveItem(itemIds as string[])
	const mounted = useMounted()

	if (!toc || !mounted) {
		return null
	}

	return (
		<div className="space-y-md">
			<p className="font-medium">On This Page</p>
			<Tree tree={toc} activeItem={activeHeading ?? undefined} />
		</div>
	)
}

function useActiveItem(itemIds: string[]) {
	const [activeId, setActiveId] = React.useState<string | null>(null)

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id)
					}
				}
			},
			{ rootMargin: "0% 0% -80% 0%" },
		)

		for (const id of itemIds) {
			const element = document.getElementById(id)
			if (element) {
				observer.observe(element)
			}
		}

		return () => {
			for (const id of itemIds) {
				const element = document.getElementById(id)
				if (element) {
					observer.unobserve(element)
				}
			}
		}
	}, [itemIds])

	return activeId
}

interface TreeProps {
	tree: TocEntry[]
	level?: number
	activeItem?: string
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
	return tree?.length && level < 3 ? (
		<ul className={cn("m-0 list-none", { "pl-lg": level !== 1 })}>
			{tree.map((item, index) => {
				return (
					<li key={index} className={cn("mt-0 pt-md")}>
						<a
							href={item.url}
							className={cn(
								"inline-block no-underline transition-colors hover:text-foreground",
								item.url === `#${activeItem}`
									? "font-medium text-foreground"
									: "text-subtle-foreground",
							)}
						>
							{item.title}
						</a>
						{item.items?.length ? (
							<Tree tree={item.items} level={level + 1} activeItem={activeItem} />
						) : null}
					</li>
				)
			})}
		</ul>
	) : null
}
