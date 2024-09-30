"use client"

import { Button as AriaButton } from "react-aria-components"

import { avatarGroupVariants, avatarVariants } from "@pixelshades/styles/components/avatar"
import { focusRing } from "@pixelshades/styles/utils"
import { useId } from "react"
import type { VariantProps } from "tailwind-variants"

export interface AvatarProps extends React.ComponentPropsWithoutRef<"span">, VariantProps<typeof avatarVariants> {
	src?: string | null
	initials?: string
	alt?: string
	className?: string
	button?: boolean
	role?: string
}

const AvatarBase = ({
	src = null,
	initials,
	alt = "",
	children,
	className,
	variant,
	button,
	size = "md",
	role = "avatar",
	...props
}: AvatarProps) => {
	const badgeId = useId()
	const ariaLabelledby = [badgeId, children ? badgeId : ""].join(" ")

	const comp = (
		<span
			aria-labelledby={ariaLabelledby}
			role={role}
			data-slot="avatar"
			{...props}
			className={avatarVariants({ variant, size, className })}
		>
			{initials && (
				<svg
					className="select-none fill-current font-medium text-[48px] uppercase"
					viewBox="0 0 100 100"
					aria-hidden={alt ? undefined : "true"}
				>
					<title>{alt}</title>
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
			{src && <img src={src} alt={alt} />}
		</span>
	)

	if (button) {
		return <AriaButton className={focusRing()}>{comp}</AriaButton>
	}

	return comp
}

export interface AvatarGroupProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof avatarGroupVariants> {
	children: React.ReactNode
}

const AvatarGroup = ({ className, ...props }: AvatarGroupProps) => {
	return <div className={avatarGroupVariants({ className })} {...props} />
}

export { AvatarGroup }

export const Avatar = Object.assign(AvatarBase, {
	Group: AvatarGroup,
})
