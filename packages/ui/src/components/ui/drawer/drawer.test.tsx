import { composeStory } from "@storybook/react"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
// import * as DrawerUtils from "./drawer"
// import { Drawer, type DrawerProps } from "./drawer"
import Meta, { Default } from "./drawer.stories"

const DrawerDefault = composeStory(Default, Meta) // default placement is "right"

describe("DrawerRoot", () => {
	it("should return the correct markup for placement='right'", () => {
		// const spy = jest.spyOn(DrawerUtils, "DrawerRoot")

		render(<DrawerDefault />)
		expect(true).toBeFalsy()

		// expect(spy).toBeCalled()

		/*render(<FormError />)

	const buttonElement = screen.getByRole("button", {
		name: "Submit",
	})

	fireEvent.click(buttonElement)

	const isFormValid = screen.getByLabelText("invalid-form")
	expect(isFormValid).toBeInTheDocument()*/
	})
})
