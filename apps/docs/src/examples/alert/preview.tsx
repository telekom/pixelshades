import { Alert, Button } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<Alert title="Alert title" after={<Button variant="link">Button</Button>}>
			Alert content
		</Alert>
	)
}
