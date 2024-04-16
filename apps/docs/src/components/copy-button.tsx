"use client"

import { Button, type ButtonProps, Menu, MenuContent, MenuItem, type MenuProps } from "@dv/ui/components"
import { CheckIcon, CopyIcon } from "@dv/ui/icons"
import { cn } from "@dv/ui/utils"
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
			{hasCopied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
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
				{hasCopied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
				<span className="sr-only">Copy</span>
			</Button>
			<MenuContent
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
				<MenuItem id="component">Component</MenuItem>
				<MenuItem id="classname">Classname</MenuItem>
			</MenuContent>
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
				{hasCopied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
				<span className="sr-only">Copy</span>
			</Button>
			<MenuContent
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
				<MenuItem id="npm">npm</MenuItem>
				<MenuItem id="yarn">yarn</MenuItem>
				<MenuItem id="pnpm">pnpm</MenuItem>
				<MenuItem id="bun">bun</MenuItem>
			</MenuContent>
		</Menu>
	)
}
