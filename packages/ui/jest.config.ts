import type { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.json", // Path to your TypeScript config file
		},
	},
	moduleNameMapper: {
		// Handle module aliases (if used in your TypeScript configuration)
		"^@pixelshades/utils/(.*)$": "<rootDir>/../utils/src/$1",
		"^@pixelshades/styles/(.*)$": "<rootDir>/../styles/src/$1",
	},
}

export default jestConfig
