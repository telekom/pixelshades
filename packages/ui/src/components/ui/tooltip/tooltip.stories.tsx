// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { cn } from "@pixelshades/utils/styles"
import type { Meta, StoryObj } from "@storybook/react"
import { SaveIcon } from "lucide-react"
import { Button } from "../button"
import { Tooltip } from "./tooltip"

const meta: Meta<typeof Tooltip> = {
	component: Tooltip,
	title: "Components/UI/Tooltip",
	decorators: (Story) => (
		<div className={cn("dark relative h-full w-full font-sans")}>
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
			<Tooltip.Root>
				<Button variant="solid">
					<SaveIcon />
				</Button>
				<Tooltip.Content>Save</Tooltip.Content>
			</Tooltip.Root>
		)
	},
}

export const Custom: Story = {
	args: {},
	render: () => {
		return (
			<Tooltip.Root>
				<Button variant="solid">
					<SaveIcon />
				</Button>
				<Tooltip.Content>Save</Tooltip.Content>
			</Tooltip.Root>
		)
	},
}

export const NoDelay: Story = {
	args: {},
	render: () => {
		return (
			<Tooltip.Root delay={0}>
				<Button variant="solid">
					<SaveIcon />
				</Button>
				<Tooltip.Content>Save</Tooltip.Content>
			</Tooltip.Root>
		)
	},
}
