"use client"

import type { VariantProps } from "tailwind-variants"

import { alertVariants } from "@pixelshades/styles/components/alert"
import { RenderSlot } from "@pixelshades/utils/jsx"
import { cn } from "@pixelshades/utils/styles"
import { forwardRef, useCallback, useState } from "react"
import type { PressEvent } from "react-aria"
import { InfoIcon } from "../../../icons"
import { If } from "../../utils"
import { Button } from "../button"

type ClosableProps = {
	/**
	 * Is the alert closable? If true, a close icon will be displayed.
	 * @default true
	 */
	closable: true

	/**
	 * An optional callback function to be called when the close icon is clicked.
	 * This can be used to handle the removal of the tag.
	 * If provided, the close icon will be displayed.
	 */
	onClose?: (event: PressEvent) => void
}

type NotClosableProps = {
	/**
	 * Is the alert closable? If true, a close button will be displayed and
	 * when clicked on it will hide the alert element
	 * @default true
	 */
	closable?: false

	/**
	 * An optional callback function to be called when the close button is clicked.
	 * Requires the `closable` prop to be set to `true`.
	 */
	onClose?: never
}

export type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, "title"> &
	VariantProps<typeof alertVariants> & {
		/**
		 * The slot to be rendered before the description.
		 * This can be used to render an icon
		 * or any other element before the description. Also accepts a string,
		 * number, or any valid React element.
		 * If the `before` prop is omitted, the default icon will be displayed.
		 *
		 * @example
		 * // Display an alert with icon
		 * <Alert before={<SuccessIcon />} />
		 */
		before?: React.ReactElement<HTMLElement>

		/**
		 * The slot to be rendered after the description.
		 * This can be a string, number or any valid React element.
		 * If omitted, it will not be displayed.
		 *
		 * @example
		 * // Display an alert with button
		 * <Alert after={<Button size='sm'>Save</Button>} />
		 */
		after?: React.ReactElement<HTMLElement>

		/**
		 * The title to display within the Alert component.
		 * This can be a string, number or any valid React element.
		 * If omitted, no title will be displayed.
		 * If a string is provided, it will be wrapped in an <AlertTitle /> component.
		 * If a React element is provided, it will be rendered as-is.
		 */
		title?: React.ReactNode
	} & (ClosableProps | NotClosableProps)

const { root, icon } = alertVariants()

const AlertWedges = forwardRef<HTMLDivElement, AlertProps>(
	(
		{ after, before, className, closable, color, variant = "inline", children, title, onClose, ...otherProps },
		ref,
	) => {
		const [visible, setVisible] = useState(true)

		/**
		 * Handle the close event.
		 * @param event - The event object
		 */
		const handleClose = useCallback(
			(event: PressEvent) => {
				if (onClose) {
					onClose(event)
				}
			},
			[onClose],
		)

		if (!visible) {
			return null
		}

		return (
			<div
				ref={ref}
				className={root({
					variant,
					color,
					className: className,
				})}
				role="alert"
				{...otherProps}
			>
				<If condition={before} fallback={<InfoIcon className={icon({ color, variant })} />}>
					{(val) => <RenderSlot item={val} className={icon({ color, variant })} />}
				</If>

				<div
					className={cn(
						"flex grow flex-col items-start",
						variant === "expanded" && "items-start gap-3 px-2",
						variant === "inline" && "px-2 sm:flex-row sm:items-center sm:gap-2",
						variant === "inline" && closable && "pr-1",
					)}
				>
					<div
						className={cn(
							"flex grow flex-col items-start",
							variant === "expanded" && "items-start",
							variant === "inline" && "sm:flex-row sm:items-center sm:gap-2",
						)}
					>
						{/* @ts-expect-error */}
						{title && <RenderSlot item={title} fallbackAs="p" />}
						{/* @ts-expect-error */}
						{children && <RenderSlot item={children} fallbackAs="p" />}
					</div>

					{after && (
						<div className={cn(variant === "inline" && "mt-3 sm:mt-0 sm:ml-auto")}>
							<If condition={after}>{(val) => <RenderSlot item={val} />}</If>
						</div>
					)}
				</div>

				{closable && <AlertCloseButton className={cn(variant === "inline" && "pr-1")} onPress={handleClose} />}
			</div>
		)
	},
)

/* CloseButton */
const AlertCloseButton = forwardRef<React.ElementRef<typeof Button>, React.ComponentPropsWithoutRef<typeof Button>>(
	({ ...otherProps }, ref) => {
		return <Button ref={ref} size="xs-icon" variant="ghost" {...otherProps} />
	},
)

AlertWedges.displayName = "Alert"
AlertCloseButton.displayName = "AlertCloseButton"

export default AlertWedges
