import { kbdVariants } from "@pixelshades/styles/components/kbd"
import * as React from "react"
import type { VariantProps } from "tailwind-variants"

export type KbdKey =
	| "command"
	| "shift"
	| "ctrl"
	| "option"
	| "enter"
	| "delete"
	| "escape"
	| "tab"
	| "capslock"
	| "up"
	| "right"
	| "down"
	| "left"
	| "pageup"
	| "pagedown"
	| "home"
	| "end"
	| "help"
	| "space"

export const kbdKeysMap: Record<KbdKey, string> = {
	command: "⌘",
	shift: "⇧",
	ctrl: "⌃",
	option: "⌥",
	enter: "↵",
	delete: "⌫",
	escape: "⎋",
	tab: "⇥",
	capslock: "⇪",
	up: "↑",
	right: "→",
	down: "↓",
	left: "←",
	pageup: "⇞",
	pagedown: "⇟",
	home: "↖",
	end: "↘",
	help: "?",
	space: "␣",
}

export const kbdKeysLabelMap: Record<KbdKey, string> = {
	command: "Command",
	shift: "Shift",
	ctrl: "Control",
	option: "Option",
	enter: "Enter",
	delete: "Delete",
	escape: "Escape",
	tab: "Tab",
	capslock: "Caps Lock",
	up: "Up",
	right: "Right",
	down: "Down",
	left: "Left",
	pageup: "Page Up",
	pagedown: "Page Down",
	home: "Home",
	end: "End",
	help: "Help",
	space: "Space",
}

export type KbdKeysLabelType = typeof kbdKeysLabelMap

/* -------------------------------- Variants -------------------------------- */

/* ---------------------------------- Types --------------------------------- */
export type KbdElement = React.ElementRef<"kbd">
export type KbdProps = Omit<React.HTMLAttributes<KbdElement>, "size"> &
	VariantProps<typeof kbdVariants> & {
		keys?: KbdKey | KbdKey[]
	}

/* ------------------------------- Components ------------------------------- */
const Key = ({ keyName }: { keyName: KbdKey }) => {
	const isKey = typeof keyName === "string"

	if (!isKey) {
		return null
	}

	return <abbr title={kbdKeysLabelMap[keyName]}>{kbdKeysMap[keyName]}</abbr>
}

export const Kbd = React.forwardRef<KbdElement, KbdProps>(
	({ children, className, keys, size = "xs", ...otherProps }, ref) => {
		const renderKeys = () => {
			if (!keys) return null

			if (Array.isArray(keys)) {
				return keys.map((k) => <Key key={k} keyName={k} />)
			}

			return null
		}

		return (
			<kbd ref={ref} className={kbdVariants({ size, className })} {...otherProps}>
				{renderKeys()}
				{children ? <span>{children}</span> : null}
			</kbd>
		)
	},
)
