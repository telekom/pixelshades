import { Link as AriaLink, type LinkProps as AriaLinkProps } from "react-aria-components"

import { linkVariants } from "@pixelshades/styles/components/link"
import type { VariantProps } from "tailwind-variants"
import { cn } from "../../../utils"

export interface LinkProps extends AriaLinkProps, VariantProps<typeof linkVariants> {
	className?: string
}

const Link = ({ className, size, variant, ...props }: LinkProps) => {
	return (
		<AriaLink
			className={cn(
				linkVariants({
					className,
					variant,
					size,
				}),
			)}
			{...props}
		/>
	)
}

Link.displayName = "Link"

export { Link }
