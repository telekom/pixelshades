import { switchVariants } from "@pixelshades/styles/components/switch"
import type { ReactNode } from "react"

import { Switch as AriaSwitch, type SwitchProps as AriaSwitchProps, Label } from "react-aria-components"

import type { VariantProps } from "tailwind-variants"

type SwitchVariantProps = VariantProps<typeof switchVariants>

interface SwitchProps extends SwitchVariantProps, AriaSwitchProps {
	children?: ReactNode
	className?: string
}

const Switch = ({ className, children, ...restProps }: SwitchProps) => (
	<AriaSwitch className={switchVariants().root({ className })} {...restProps}>
		{({ isSelected }) => (
			<>
				<div
					className={switchVariants({
						selected: isSelected,
					}).indicator()}
				/>
				<Label className={switchVariants().label()}> {children}</Label>
			</>
		)}
	</AriaSwitch>
)

Switch.displayName = "Switch"

export { type SwitchProps, Switch }
