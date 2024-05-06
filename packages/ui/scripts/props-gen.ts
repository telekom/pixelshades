import { Glob } from "bun"

import docgen from "react-docgen-typescript"

const glob = new Glob("./src/components/ui/**/*.tsx")

// Scans the current working directory and each of its sub-directories recursively
const files: string[] = []
for await (const file of glob.scan(".")) {
	if (file.endsWith(".stories.tsx")) continue
	files.push(file)
}

const customCompilerOptionsParser = docgen.withCompilerOptions(
	{ esModuleInterop: true },
	{
		propFilter: (prop) => {
			// console.log(prop.name)
			return true
		},
		savePropValueAsString: true,
		shouldExtractLiteralValuesFromEnum: true,
		shouldRemoveUndefinedFromOptional: true,
		componentNameResolver: (name) => {
			return name.getName()
		},
	},
)

// Parse a file for docgen info
const props = customCompilerOptionsParser.parse(files)

Bun.write("../../apps/docs/src/lib/props.json", JSON.stringify(props, null, 2))
