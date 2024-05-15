import { composeStory } from "@storybook/react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Meta, { Default } from "./drawer.stories"

const DrawerDefault = composeStory(Default, Meta) // default placement is "right"

describe("DrawerRoot", () => {
	it("should return the correct markup for placement='right'", async () => {
		render(<DrawerDefault />)
		expect(screen.getByRole("dialog")).toBeInTheDocument()
	})
})
