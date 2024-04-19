import { Button, ButtonGroup } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-row gap-layout-sm">
			<ButtonGroup orientation="vertical">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>

			<ButtonGroup orientation="vertical" variant="outline">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>

			<ButtonGroup orientation="vertical" variant="ghost">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>

			<ButtonGroup orientation="vertical" variant="link">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</div>
	)
}
