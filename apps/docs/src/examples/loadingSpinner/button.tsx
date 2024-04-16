import { LoadingSpinner } from "@dv/ui/components"
import { Button } from "@dv/ui/components"

export default function Example() {
	return <Button before={<LoadingSpinner />}>Loading...</Button>
}
