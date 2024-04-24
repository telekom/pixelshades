import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/docs/")({
	component: () => <div>Pixel Shades doc starter page</div>,
})
