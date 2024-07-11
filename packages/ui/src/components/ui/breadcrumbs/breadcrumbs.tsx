"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type {
	BreadcrumbProps as AriaBreadcrumbProps,
	BreadcrumbsProps as AriaBreadcrumbsProps,
	LinkProps as AriaLinkProps,
} from "react-aria-components"
import { Breadcrumb as AriaBreadcrumb, Breadcrumbs as AriaBreadcrumbs, Link as AriaLink } from "react-aria-components"

import { breadcrumbsVariants } from "@pixelshades/styles/components/breadcrumbs"
import { RenderSlot, forwardRef } from "@pixelshades/utils/jsx"
import { IconChevronRight } from "@tabler/icons-react"
import type React from "react"
import { type ReactElement, createContext, useContext } from "react"
import { If } from "../../utils"

type BreadcrumbContext = {
	separator: ReactElement<HTMLElement>
}

const BreadcrumbContext = createContext<BreadcrumbContext>({
	separator: <IconChevronRight />,
})

const { breadcrumbs, breadcrumb, breadcrumbLink, seperator } = breadcrumbsVariants()

export interface BreadcrumbsProps<T extends object> extends Omit<AriaBreadcrumbsProps<T>, "children"> {
	/** The styles of the breadcrumbs. */
	className?: string
	/** The separator between the breadcrumbs. */
	separator?: ReactElement<HTMLElement>
	/** The breadcrumb items. */
	children: React.ReactNode | ((item: T) => React.ReactNode)
}

const BreadcrumbsRoot = forwardRef(<T extends object>({ className, separator, ...props }: BreadcrumbsProps<T>) => {
	return (
		<BreadcrumbContext.Provider
			value={{
				separator: separator || <IconChevronRight />,
			}}
		>
			<AriaBreadcrumbs className={breadcrumbs({ className })} {...props} />
		</BreadcrumbContext.Provider>
	)
})

export interface BreadcrumbProps extends AriaBreadcrumbProps {
	className?: string
	linkProps?: AriaLinkProps & {
		className?: string
	}
	separator?: ReactElement<HTMLElement>
}

export const Breadcrumb = forwardRef(({ children, linkProps, className, separator, ...props }: BreadcrumbProps) => {
	const context = useContext(BreadcrumbContext)

	return (
		<AriaBreadcrumb className={breadcrumb({ className })} {...props}>
			<AriaLink {...linkProps} className={breadcrumbLink({ className: linkProps?.className })}>
				{children}
			</AriaLink>
			<RenderSlot className={seperator()} item={separator ? separator : context.separator} />
		</AriaBreadcrumb>
	)
})

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
	Item: Breadcrumb,
})
