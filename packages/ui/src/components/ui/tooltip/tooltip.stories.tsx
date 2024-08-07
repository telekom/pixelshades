// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { Button, Tooltip, TooltipContent, TooltipRoot } from "@pixelshades/ui/components"
import { cn } from "@pixelshades/cn"
import type { Meta, StoryObj } from "@storybook/react"
import { SaveIcon } from "lucide-react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Tooltip> = {
	component: Tooltip,
	title: "Components/UI/Tooltip",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={cn(inter.variable, "dark relative h-full w-full font-sans")}>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
	args: {},
	render: () => {
		return (
			<TooltipRoot>
				<Button variant="solid">
					<SaveIcon />
				</Button>
				<TooltipContent>Save</TooltipContent>
			</TooltipRoot>
		)
	},
}

export const Custom: Story = {
	args: {},
	render: () => {
		return (
			<TooltipRoot>
				<Button variant="solid">
					<SaveIcon />
				</Button>
				<TooltipContent>Save</TooltipContent>
			</TooltipRoot>
		)
	},
}

export const NoDelay: Story = {
	args: {},
	render: () => {
		return (
			<TooltipRoot delay={0}>
				<Button variant="solid">
					<SaveIcon />
				</Button>
				<TooltipContent>Save</TooltipContent>
			</TooltipRoot>
		)
	},
}
