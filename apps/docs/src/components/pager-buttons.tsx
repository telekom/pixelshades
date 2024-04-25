import { Button, Typography } from "@dv/ui/components"
import { ChevronLeft, ChevronRight } from "@dv/ui/icons"
import { useNavigate } from "@tanstack/react-router"
import { getNavbarItems } from "~/config/navbar-items"

type PagerButtonsProps = {
	permalink: string
}
const mergedComponents = getNavbarItems()

function getNextComponentByPermalink(permalink: string) {
	const currentComponentIndex = mergedComponents.findIndex((component) => component.permalink === permalink)

	if (currentComponentIndex === -1) {
		return null
	}

	return mergedComponents[currentComponentIndex + 1]
}

function getPrevComponentByPermalink(permalink: string) {
	const currentComponentIndex = mergedComponents.findIndex((component) => component.permalink === permalink)

	if (currentComponentIndex === -1) {
		return null
	}

	return mergedComponents[currentComponentIndex - 1]
}

const getComponentPath = (permalink: string) => {
	return `${permalink
		.split("/")
		.slice(0, permalink.split("/").length - 1)
		.join("/")}/$slug`
}

export const PagerButtons = ({ permalink }: PagerButtonsProps) => {
	const nextComponent = getNextComponentByPermalink(permalink)
	const prevComponent = getPrevComponentByPermalink(permalink)
	const navigate = useNavigate()

	return (
		<div className="flex flex-row gap-layout-xs">
			{prevComponent && (
				<Button
					className="flex h-full w-full flex-row justify-between p-md"
					variant="outline"
					size="lg"
					onPress={() =>
						navigate({
							to: getComponentPath(prevComponent.permalink),
							search: { tab: "docs" },
							params: { slug: prevComponent.slug },
						})
					}
				>
					<ChevronLeft className="size-3" />
					<div className="flex flex-col items-end">
						<Typography>Previous</Typography>
						<Typography className="text-subtle-foreground">{prevComponent.title}</Typography>
					</div>
				</Button>
			)}
			{nextComponent && (
				<Button
					className="flex h-full w-full flex-row justify-between p-md"
					size="lg"
					variant="outline"
					onPress={() =>
						navigate({
							to: getComponentPath(nextComponent.permalink),
							search: { tab: "docs" },
							params: { slug: nextComponent.slug },
						})
					}
				>
					<div className="flex flex-col items-start">
						<Typography>Next</Typography>
						<Typography className="text-subtle-foreground">{nextComponent.title}</Typography>
					</div>
					<ChevronRight className="size-3" />
				</Button>
			)}
		</div>
	)
}
