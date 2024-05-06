// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../button"
import { Drawer } from "./drawer"

const meta: Meta<typeof Drawer> = {
	component: Drawer,
	title: "Components/UI/Drawer",
	decorators: (Story) => (
		<div className={"dark relative h-full w-full font-sans"}>
			<Drawer.Trigger>
				<Button variant="outline">open drawer</Button>
				<Story />
			</Drawer.Trigger>
		</div>
	),
	args: {},
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
	args: {},
	render: (args) => {
		return (
			<Drawer {...args}>
				<Drawer.Content>
					<>
						<Drawer.Header className={"flex-row items-center justify-between space-y-0"}>
							<Drawer.Title>Drawer Title</Drawer.Title>
						</Drawer.Header>
						<div>Drawer Content</div>
					</>
				</Drawer.Content>
			</Drawer>
		)
	},
}

export const Right: Story = {
	args: {
		placement: "right",
	},
	render: Default.render,
}

export const Left: Story = {
	args: {
		placement: "left",
	},
	render: Default.render,
}

export const Top: Story = {
	args: {
		placement: "top",
	},
	render: Default.render,
}

export const Bottom: Story = {
	args: {
		placement: "bottom",
	},
	render: Default.render,
}
