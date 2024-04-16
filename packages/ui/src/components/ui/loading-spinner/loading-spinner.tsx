import { loadingSpinnerVariants } from "@dv/styles/components/loading-spinner"
import { LoaderCircle } from "lucide-react"
import type React from "react"
import type { VariantProps } from "tailwind-variants"
import { RenderSlot } from "../../../utils/jsx"
import { If } from "../../utils"

interface LoadingSpinnerProps extends VariantProps<typeof loadingSpinnerVariants> {
	className?: string
	icon?: React.ReactElement<HTMLElement>
}

const LoadingSpinner = ({ className, size, variant, icon }: LoadingSpinnerProps) => {
	return (
		<If
			condition={icon}
			fallback={<LoaderCircle className={loadingSpinnerVariants({ size, variant, className })} />}
		>
			<RenderSlot item={icon!} className={loadingSpinnerVariants({ size, variant, className })} />
		</If>
	)
}

LoadingSpinner.displayName = "LoadingSpinner"

export { LoadingSpinner }
