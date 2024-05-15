import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
	testDir: "./tests",
	snapshotDir: "./tests/__screenshots__",
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
	],
})
