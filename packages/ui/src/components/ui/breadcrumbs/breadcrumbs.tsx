// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type {
	BreadcrumbProps as AriaBreadcrumbProps,
	BreadcrumbsProps as AriaBreadcrumbsProps,
} from "react-aria-components"
import { Breadcrumb as AriaBreadcrumb, Breadcrumbs as AriaBreadcrumbs } from "react-aria-components"

import { breadcrumbsVariants } from "@pixelshades/styles/components/breadcrumbs"
import { ChevronRightIcon } from "lucide-react"
import type React from "react"
import { type ReactElement, createContext, useContext } from "react"
import { RenderSlot, forwardRef } from "../../../utils/jsx"
import { If } from "../../utils"
import { Link, type LinkProps } from "../link"

type BreadcrumbContext = {
	separator: ReactElement<HTMLElement>
}

const BreadcrumbContext = createContext<BreadcrumbContext>({
	separator: <ChevronRightIcon />,
})

const { breadcrumbs, breadcrumb, breadcrumbLink, seperator } = breadcrumbsVariants()

interface BreadcrumbsProps<T extends object> extends Omit<AriaBreadcrumbsProps<T>, "children"> {
	className?: string
	separator?: ReactElement<HTMLElement>
	children: React.ReactNode | ((item: T) => React.ReactNode)
}

const Breadcrumbs = forwardRef(<T extends object>({ className, separator, ...props }: BreadcrumbsProps<T>) => {
	return (
		<BreadcrumbContext.Provider
			value={{
				separator: separator || <ChevronRightIcon />,
			}}
		>
			<AriaBreadcrumbs className={breadcrumbs({ className })} {...props} />
		</BreadcrumbContext.Provider>
	)
})

interface BreadcrumbProps extends AriaBreadcrumbProps {
	last?: boolean
	className?: string
	linkProps?: LinkProps
	separator?: ReactElement<HTMLElement>
}

const Breadcrumb = forwardRef(({ children, last, linkProps, className, separator, ...props }: BreadcrumbProps) => {
	const context = useContext(BreadcrumbContext)

	return (
		<AriaBreadcrumb className={breadcrumb({ className })} {...props}>
			<Link
				{...linkProps}
				variant={last ? "active" : "default"}
				className={breadcrumbLink({ className: linkProps?.className })}
			>
				{children}
			</Link>
			<If condition={!last}>
				<RenderSlot className={seperator()} item={separator ? separator : context.separator} />
			</If>
		</AriaBreadcrumb>
	)
})

export { Breadcrumbs, Breadcrumb }
