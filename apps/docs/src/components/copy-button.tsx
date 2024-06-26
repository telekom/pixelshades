"use client"

import { Button, type ButtonProps, Menu, type MenuProps } from "@pixelshades/ui/components"
import { IconCheck, IconCopy } from "@pixelshades/ui/icons"

import { cn } from "@pixelshades/utils/styles"
import { useCallback, useEffect, useState } from "react"
import type { NpmCommands } from "~/lib/rehype/types/units"

interface CopyButtonProps extends ButtonProps {
	value: string
	src?: string
}

export async function copyToClipboardWithMeta(value: string) {
	navigator.clipboard.writeText(value)
}

export function CopyButton({ value, className, src, ...props }: CopyButtonProps) {
	const [hasCopied, setHasCopied] = useState(false)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setTimeout(() => {
			setHasCopied(false)
		}, 2000)
	}, [hasCopied])

	return (
		<Button
			size="icon"
			variant="ghost"
			className={cn("relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50", className)}
			onPress={() => {
				copyToClipboardWithMeta(value)
				setHasCopied(true)
			}}
			{...props}
		>
			<span className="sr-only">Copy</span>
			{hasCopied ? <IconCheck className="h-3 w-3" /> : <IconCopy className="size-3" />}
		</Button>
	)
}

interface CopyWithClassNamesProps extends MenuProps {
	value: string
	classNames: string
	className?: string
}

export function CopyWithClassNames({ value, classNames, className, ...props }: CopyWithClassNamesProps) {
	const [hasCopied, setHasCopied] = useState(false)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setTimeout(() => {
			setHasCopied(false)
		}, 2000)
	}, [hasCopied])

	const copyToClipboard = useCallback((value: string) => {
		copyToClipboardWithMeta(value)
		setHasCopied(true)
	}, [])

	return (
		<Menu {...props}>
			<Button
				size="icon"
				variant="ghost"
				className={cn("relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50", className)}
			>
				{hasCopied ? <IconCheck className="h-3 w-3" /> : <IconCopy className="h-3 w-3" />}
				<span className="sr-only">Copy</span>
			</Button>
			<Menu.Content
				onAction={(key) => {
					switch (key) {
						case "component":
							copyToClipboard(value)
							break
						case "classname":
							copyToClipboard(classNames)
							break
						default:
							break
					}
				}}
			>
				<Menu.Item id="component">Component</Menu.Item>
				<Menu.Item id="classname">Classname</Menu.Item>
			</Menu.Content>
		</Menu>
	)
}

interface CopyNpmCommandButtonProps extends ButtonProps {
	commands: Required<NpmCommands>
}

export function CopyNpmCommandButton({ commands, className, ...props }: CopyNpmCommandButtonProps) {
	const [hasCopied, setHasCopied] = useState(false)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setTimeout(() => {
			setHasCopied(false)
		}, 2000)
	}, [hasCopied])

	const copyCommand = useCallback((value: string) => {
		copyToClipboardWithMeta(value)
		setHasCopied(true)
	}, [])

	return (
		<Menu>
			<Button
				size="icon"
				variant="ghost"
				className={cn("relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50", className)}
				{...props}
			>
				{hasCopied ? <IconCheck className="h-3 w-3" /> : <IconCopy className="h-3 w-3" />}
				<span className="sr-only">Copy</span>
			</Button>
			<Menu.Content
				onAction={(key) => {
					switch (key) {
						case "npm":
							copyCommand(commands.__npmCommand__)
							break
						case "yarn":
							copyCommand(commands.__yarnCommand__)
							break
						case "pnpm":
							copyCommand(commands.__pnpmCommand__)
							break
						case "bun":
							copyCommand(commands.__bunCommand__)
							break
						default:
							break
					}
				}}
			>
				<Menu.Item id="npm">npm</Menu.Item>
				<Menu.Item id="yarn">yarn</Menu.Item>
				<Menu.Item id="pnpm">pnpm</Menu.Item>
				<Menu.Item id="bun">bun</Menu.Item>
			</Menu.Content>
		</Menu>
	)
}
