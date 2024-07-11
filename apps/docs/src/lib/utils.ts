/**
 * Beautify a string in various formats.
 * e.g. "myString" -> "My String"
 * e.g. "my-string" -> "My String"
 * e.g. "my_string" -> "My String"
 * e.g. "cool-button" -> "Cool Button"
 * e.g. "cool_button" -> "Cool Button"
 * @param string The input string to beautify
 * @returns The beautified string
 */
export function beautifyObjectName(string: string): string {
	// If the string is empty or contains only numbers, return it as is
	if (!string || /^\d+$/.test(string)) {
		return string
	}

	// Replace hyphens and underscores with spaces
	let output = string.replace(/[-_]/g, " ")

	// Insert a space before any uppercase letter that follows a lowercase letter or number
	output = output.replace(/([a-z0-9])([A-Z])/g, "$1 $2")

	// Capitalize the first letter of each word
	output = output.replace(/\b\w/g, (char) => char.toUpperCase())

	// Trim any leading or trailing whitespace
	output = output.trim()

	return output
}
