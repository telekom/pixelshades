import { Button } from "@pixelshades/ui/components"
import { Alert } from "@pixelshades/ui/components/ui"

export default function Example() {
	return (
		<Alert title="Alert title" after={<Button variant="link">Button</Button>}>
			Alert content
		</Alert>
	)
}
