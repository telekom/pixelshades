"use client"

import { avatarVariants } from "@pixelshades/styles/components/avatar"
import { focusRing } from "@pixelshades/styles/utils"
import { Button as AriaButton } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"

export interface AvatarProps extends React.ComponentPropsWithoutRef<"span">, VariantProps<typeof avatarVariants> {
	src?: string | null
	initials?: string
	alt?: string
	className?: string
	button?: boolean
}

const { root, image } = avatarVariants()

export const Avatar = ({ src = null, initials, alt = "", className, button, ...props }: AvatarProps) => {
	const Comp = (
		<span className={root({ className, ...props })} {...props}>
			{initials && (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					className="select-none fill-current font-medium uppercase"
					viewBox="0 0 100 100"
					aria-hidden={alt ? undefined : "true"}
				>
					{alt && <title>{alt}</title>}
					<text
						x="50%"
						y="50%"
						alignmentBaseline="middle"
						dominantBaseline="middle"
						textAnchor="middle"
						dy=".125em"
					>
						{initials}
					</text>
				</svg>
			)}
			{src && <img className={image(props)} src={src} alt={alt} />}
		</span>
	)

	if (button) {
		return <AriaButton className={focusRing()}>{Comp}</AriaButton>
	}

	return Comp
}
