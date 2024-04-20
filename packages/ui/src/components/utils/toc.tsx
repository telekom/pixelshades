"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useMemo, useState } from "react"
import { If } from "../utils/if"

interface TocItem {
	title: string
	url: string
	items: TocItem[]
}

interface TocProps {
	toc: TocItem[]
}

import { cn } from "@pixelshades/utils/styles"
import { useMounted } from "../../hooks"

export const TableOfContents = ({ toc }: TocProps) => {
	const isMounted = useMounted()
	const itemIds = useMemo(
		() =>
			toc
				.flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
				.flat()
				.filter(Boolean)
				.map((id) => id?.split("#")[1]),
		[toc],
	) as string[]

	const activeHeading = useActiveItem(itemIds)

	if (!isMounted) {
		return null
	}

	return (
		<nav className="rounded p-4 shadow">
			<h2 className="mb-4 font-bold text-xl">Table of Contents</h2>
			<Tree tree={toc} activeItem={activeHeading} />
		</nav>
	)
}

interface TreeProps {
	tree: TocItem[]
	level?: number
	activeItem?: string | null
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
	return (
		<If condition={tree?.length && level < 3}>
			<ul className={cn("m-0 list-none", { "pl-lg": level !== 1 })}>
				{tree.map((item, index) => {
					return (
						<li key={index} className={cn("mt-0 pt-sm")}>
							<a
								href={item.url}
								className={cn(
									"inline-block text-subtle-foreground no-underline transition-colors hover:text-foreground",
									{ "font-medium text-foreground": item.url === `#${activeItem}` },
								)}
							>
								{item.title}
							</a>
							<If condition={item.items?.length}>
								<Tree tree={item.items} level={level + 1} activeItem={activeItem} />
							</If>
						</li>
					)
				})}
			</ul>
		</If>
	)
}

function useActiveItem(itemIds: string[]) {
	const [activeId, setActiveId] = useState<string | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				// biome-ignore lint/complexity/noForEach: <explanation>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id)
					}
				})
			},
			{ rootMargin: "0% 0% -50% 0%" },
		)

		// biome-ignore lint/complexity/noForEach: <explanation>
		itemIds?.forEach((id) => {
			const element = document.getElementById(id)
			if (element) {
				observer.observe(element)
			}
		})

		return () => {
			// biome-ignore lint/complexity/noForEach: <explanation>
			itemIds?.forEach((id) => {
				const element = document.getElementById(id)
				if (element) {
					observer.unobserve(element)
				}
			})
		}
	}, [itemIds])

	return activeId
}
