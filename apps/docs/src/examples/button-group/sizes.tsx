import { Button, ButtonGroup } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col items-center justify-center gap-md">
			<ButtonGroup size="xs">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup size="sm">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup size="md">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<ButtonGroup size="lg">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</div>
	)
}
