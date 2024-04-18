import type React from "react"
import { forwardRef } from "react"
import type { VariantProps } from "tailwind-variants"

import { buttonVariants } from "@dv/styles/components/button"

import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components"
import { RenderSlot } from "../../../utils/jsx"
import { If } from "../../utils"

type ButtonVariantProps = VariantProps<typeof buttonVariants>

interface ButtonProps extends ButtonVariantProps, AriaButtonProps {
	before?: React.ReactElement<HTMLElement>

	after?: React.ReactElement<HTMLElement>
}

const { button, icon } = buttonVariants()

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ size, variant, className, children, before, after, withRing, ...props }, ref) => {
		return (
			<AriaButton
				className={(values) =>
					button({
						variant,
						withRing,
						size,
						className: typeof className === "function" ? className(values) : className,
					})
				}
				ref={ref}
				{...props}
			>
				<>
					<If condition={before}>
						<RenderSlot item={before!} className={icon({ variant, withRing, size })} />
					</If>
					{children}
					<If condition={after}>
						<RenderSlot item={after!} className={icon({ variant, withRing, size })} />
					</If>
				</>
			</AriaButton>
		)
	},
)

export { type ButtonProps, Button }
