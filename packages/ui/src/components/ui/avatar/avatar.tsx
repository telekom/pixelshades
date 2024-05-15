"use client"

import { avatarVariants } from "@pixelshades/styles/components/avatar"
import type { VariantProps } from "tailwind-variants"

export interface AvatarProps extends React.ComponentPropsWithoutRef<"span">, VariantProps<typeof avatarVariants> {
	/**The image source.*/
	src?: string | null
	/**The initials to display.*/
	initials?: string
	/**The alt text to display if the image is not available.*/
	alt?: string
	/**The class name to apply to the root element.*/
	className?: string
}

const { root, image } = avatarVariants()

export const Avatar = ({ src = null, initials, alt = "", className, ...props }: AvatarProps) => {
	return (
		<span className={root({ className })} {...props}>
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
			{src && <img className={image()} src={src} alt={alt} />}
		</span>
	)
}
