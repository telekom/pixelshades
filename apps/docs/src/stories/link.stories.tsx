import { Link } from "@dv/ui/components"
import type { Meta, StoryObj } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const meta: Meta<typeof Link> = {
	component: Link,
	title: "Components/UI/Link",
	tags: ["autodocs"],
	decorators: (Story) => (
		<div
			className={`${
				inter.variable
				// biome-ignore lint/nursery/useSortedClasses: <explanation>
			} dark relative h-full w-full font-sans`}
		>
			<Story />
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Link>

export const LinkType: Story = {
	args: {
		variant: "default",
		children: "Link",
		href: "",
	},
}
