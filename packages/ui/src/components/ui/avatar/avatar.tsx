import { avatarVariants } from "@pixelshades/styles/components/avatar"

export interface AvatarProps extends React.ComponentPropsWithoutRef<"span"> {
	src?: string | null
	initials?: string
	alt?: string
	className?: string
}

const { root, ring, image } = avatarVariants()

export function Avatar({ src = null, initials, alt = "", className, ...props }: AvatarProps) {
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
			{/* Add an inset border that sits on top of the image */}
			<span className={ring()} aria-hidden="true" />
		</span>
	)
}
