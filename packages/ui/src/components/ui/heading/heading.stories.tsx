// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { Meta, StoryObj } from "@storybook/react"
import { Heading, HeadingLevel } from "./heading"

const meta: Meta<typeof Heading> = {
	component: Heading,
	title: "Components/UI/Heading",
	decorators: (Story) => (
		<div className={"dark relative h-full w-full font-sans"}>
			<HeadingLevel>
				<Story />
			</HeadingLevel>
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
	args: {
		children: "Lorem Ipsum",
	},
}

export const Sizes = () => {
	return (
		<HeadingLevel>
			<Heading level={1}>Ag</Heading>
			<Heading level={2}>Ag</Heading>
			<Heading level={3}>Ag</Heading>
			<Heading level={4}>Ag</Heading>
			<Heading level={5}>Ag</Heading>
			<Heading level={6}>Ag</Heading>
		</HeadingLevel>
	)
}
