import { Check } from "lucide-react"

import { type ElementRef, forwardRef } from "react"

import { checkboxVariant } from "@dv/styles/components/checkbox"
import { type CheckboxProps as AriaCheckBoxProps, Checkbox as AriaCheckbox } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"

type CheckboxVariantProps = VariantProps<typeof checkboxVariant>

interface CheckBoxProps extends CheckboxVariantProps, AriaCheckBoxProps {
	className?: string
}

const Checkbox = forwardRef<ElementRef<typeof AriaCheckbox>, CheckBoxProps>(
	({ className, size, children, ...props }, ref) => {
		return (
			<AriaCheckbox className={checkboxVariant({ size }).root({ className })} ref={ref} {...props}>
				{({ isSelected }) => (
					<>
						<div className={checkboxVariant({ size }).box()}>{isSelected && <Check />}</div>
						{children}
					</>
				)}
			</AriaCheckbox>
		)
	},
)

Checkbox.displayName = "Checkbox"

export { type CheckBoxProps, Checkbox }
