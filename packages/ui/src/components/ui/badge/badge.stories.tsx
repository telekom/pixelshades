// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./badge"

const meta: Meta<typeof Badge> = {
	component: Badge,
	title: "Components/UI/Badge",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div className={"dark relative h-full w-full font-sans"}>
			<Story />
		</div>
	),
	args: {},
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
	args: {
		children: "Default",
		variant: "default",
	},
}

export const Info: Story = {
	args: {
		children: "Info",
		variant: "info",
	},
}

export const Alert: Story = {
	args: {
		children: "Alert",
		variant: "alert",
	},
}
