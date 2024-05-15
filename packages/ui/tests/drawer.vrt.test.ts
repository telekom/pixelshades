import { expect, test } from "@playwright/test"
import { PLACEMENTS } from "../src/components"

const placements = [...PLACEMENTS, "default"]

test.describe("Visual Regression Tests", () => {
	for (const placement of placements) {
		test(`Drawer ${placement}`, async ({ page }) => {
			await page.goto(`http://localhost:6006/?path=/story/components-ui-drawer--${placement}`) // URL for the Storybook iframe of the component

			await expect(page.locator("#preview-loader")).toBeHidden()

			const iFrame = page.locator("#storybook-preview-iframe")
			const screenshot = await iFrame.screenshot()

			expect(screenshot).toMatchSnapshot(`drawer-${placement}.png`)
		})
	}

	test("Drawer hide close button", async ({ page }) => {
		await page.goto("http://localhost:6006/?path=/story/components-ui-drawer--hide-close-button") // URL for the Storybook iframe of the component

		await expect(page.locator("#preview-loader")).toBeHidden()
		await expect(page.locator("div.sb-preparing-story.sb-wrapper")).toBeHidden()

		const iFrame = page.locator("#storybook-preview-iframe")
		const screenshot = await iFrame.screenshot()

		expect(screenshot).toMatchSnapshot("drawer-hide-close-button.png")
	})
})
