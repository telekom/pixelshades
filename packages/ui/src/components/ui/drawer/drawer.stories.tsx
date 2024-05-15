// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../button"
import { Drawer } from "./drawer"

type DrawerPropsAndCustomArgs = React.ComponentProps<typeof Drawer> & { hideCloseButton?: boolean }

const meta: Meta<DrawerPropsAndCustomArgs> = {
	component: Drawer,
	title: "Components/UI/Drawer",
	decorators: (Story) => (
		<div className={"dark relative h-full w-full font-sans"}>
			<Drawer.Trigger defaultOpen={true}>
				<Button variant="outline">open drawer</Button>
				<Story />
			</Drawer.Trigger>
		</div>
	),
	args: {},
}

export default meta

type Story = StoryObj<DrawerPropsAndCustomArgs>

export const Default: Story = {
	args: {},
	render: ({ hideCloseButton, ...args }) => {
		return (
			<Drawer {...args}>
				<Drawer.Content hideCloseButton={hideCloseButton}>
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

export const hideCloseButton: Story = {
	args: {
		hideCloseButton: true,
	},
	render: Default.render,
}
