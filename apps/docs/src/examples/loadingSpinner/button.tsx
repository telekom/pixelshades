import { LoadingSpinner } from "@pixelshades/ui/components"
import { Button } from "@pixelshades/ui/components"

export default function Example() {
	return <Button before={<LoadingSpinner />}>Loading...</Button>
}
