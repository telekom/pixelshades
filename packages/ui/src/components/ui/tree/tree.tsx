"use client"

import type * as React from "react"

import {
	UNSTABLE_Tree as AriaTree,
	UNSTABLE_TreeItem as AriaTreeItem,
	UNSTABLE_TreeItemContent as AriaTreeItemContent,
	type TreeItemProps as AriaTreeItemProps,
	Button,
	type TreeProps,
	composeRenderProps,
} from "react-aria-components"

import { IconChevronRight } from "@tabler/icons-react"
import { Checkbox } from "../checkbox"
import { treeItemStyles, treeStyles } from "./variants"

const TreeRoot = <T extends object>({ className, ...props }: TreeProps<T>) => {
	return (
		<AriaTree
			className={composeRenderProps(className, (className, renderProps) =>
				treeStyles({
					...renderProps,
					className,
				}),
			)}
			{...props}
		>
			{props.children}
		</AriaTree>
	)
}

const TreeItem = <T extends object>({ className, ...props }: AriaTreeItemProps<T>) => {
	return (
		<AriaTreeItem
			className={composeRenderProps(className, (className, renderProps) =>
				treeItemStyles({
					...renderProps,
					className,
				}),
			)}
			{...props}
		>
			{props.children}
		</AriaTreeItem>
	)
}

const TreeItemContent = (props: React.ComponentProps<typeof AriaTreeItemContent>) => {
	return (
		<AriaTreeItemContent {...props}>
			<div className="flex items-center">
				{/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
				<>{props.children}</>
			</div>
		</AriaTreeItemContent>
	)
}

const TreeItemIndicator = () => {
	return (
		<Button className="relative shrink-0" slot="chevron">
			<IconChevronRight className="size-5" data-slot="icon" />
		</Button>
	)
}

const TreeItemCheckbox = () => {
	return <Checkbox slot="selection" />
}

export const TreeItemLabel = (props: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
	return <span {...props} />
}

export const Tree = Object.assign(TreeRoot, {
	Item: TreeItem,
	ItemLabel: TreeItemLabel,
	ItemIndicator: TreeItemIndicator,
	ItemCheckbox: TreeItemCheckbox,
	ItemContent: TreeItemContent,
})
