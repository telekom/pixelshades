import { tooltipVariants } from "@dv/styles/components/tooltip"
import { InfoIcon } from "lucide-react"
import {
	Tooltip as AriaTooltip,
	type TooltipProps as AriaTooltipProps,
	TooltipTrigger as AriaTooltipTrigger,
	type TooltipTriggerComponentProps,
} from "react-aria-components"
import { Button } from "../button"

const TooltipRoot = (props: TooltipTriggerComponentProps) => <AriaTooltipTrigger {...props} />

TooltipRoot.displayName = "TooltipRoot"

export interface TooltipContentProps extends AriaTooltipProps {
	className?: string
}

const TooltipContent = ({ children, className, ...props }: TooltipContentProps) => (
	<AriaTooltip className={tooltipVariants({ className })} {...props}>
		{children}
	</AriaTooltip>
)

TooltipContent.displayName = "TooltipContent"

export interface TooltipProps extends AriaTooltipProps {
	className?: string
}

const Tooltip = ({ children, className, ...props }: TooltipProps) => {
	return (
		<TooltipRoot delay={200} closeDelay={200}>
			<Button className="size-4 hover:text-primary" variant="ghost" size="icon">
				<InfoIcon className="size-3" />
			</Button>
			<TooltipContent className={className} {...props}>
				{children}
			</TooltipContent>
		</TooltipRoot>
	)
}

Tooltip.displayName = "Tooltip"

export { Tooltip, TooltipContent, TooltipRoot }