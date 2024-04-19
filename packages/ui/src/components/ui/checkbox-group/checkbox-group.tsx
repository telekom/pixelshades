import { checkboxGroup } from "@pixelshades/styles/components/checkbox-group"
import type { ReactNode } from "react"
import type { CheckboxGroupProps as AriaCheckboxGroupProps } from "react-aria-components"
import { CheckboxGroup as AriaCheckboxGroup, Text } from "react-aria-components"

interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, "className" | "children"> {
	className?: string
	children?: ReactNode
	label?: ReactNode
	description?: string
	error?: string
}

const CheckboxGroup = ({ className, label, description, error, children, ...props }: CheckboxGroupProps) => (
	<AriaCheckboxGroup {...props} className={checkboxGroup({ className })}>
		{label}
		{children}
		{description && (
			<Text className="text-base" slot="description">
				{description}
			</Text>
		)}
		{error && (
			<Text className="text-base text-destructive" slot="errorMessage">
				{error}
			</Text>
		)}
	</AriaCheckboxGroup>
)

CheckboxGroup.displayName = "CheckboxGroup"

export { type CheckboxGroupProps, CheckboxGroup }
