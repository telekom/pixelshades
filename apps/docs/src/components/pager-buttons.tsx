import { Button, Typography } from "@dv/ui/components"
import { ArrowLeft, ArrowRight } from "@dv/ui/icons"
import { Link } from "@tanstack/react-router"
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
/** Get the title of the successor category if it's not the same as the current category */
const getSuccessorCategorySlug = ({
	permalinkCurrentComponent,
	permalinkSuccessorComponent,
}: { permalinkCurrentComponent: string; permalinkSuccessorComponent: string | undefined }) => {
	if (!permalinkSuccessorComponent) {
		return null
	}

	const currentComponentSlug = permalinkCurrentComponent.split("/")[permalinkCurrentComponent.split("/").length - 2]
	const neighbourComponentSlug =
		permalinkSuccessorComponent.split("/")[permalinkSuccessorComponent.split("/").length - 2]

	// if new category is introduced, add it here
	if (currentComponentSlug !== neighbourComponentSlug) {
		switch (neighbourComponentSlug) {
			case "dvds-cli":
				return "DVDS-CLI"
			case "components":
				return "Components"
			case "docs":
				return "Getting Started"
		}

		return permalinkSuccessorComponent.split("/")[permalinkSuccessorComponent.split("/").length - 2]
	}
	return null
}

export const PagerButtons = ({ permalink }: PagerButtonsProps) => {
	const nextComponent = getNextComponentByPermalink(permalink)
	const prevComponent = getPrevComponentByPermalink(permalink)
	const prevCategoryTitle = getSuccessorCategorySlug({
		permalinkCurrentComponent: permalink,
		permalinkSuccessorComponent: prevComponent?.permalink,
	})
	const nextCategoryTitle = getSuccessorCategorySlug({
		permalinkCurrentComponent: permalink,
		permalinkSuccessorComponent: nextComponent?.permalink,
	})
	return (
		<div className="flex flex-col gap-layout-xs md:flex-row">
			{prevComponent && (
				<Link
					className="h-full w-full"
					aria-label="Previous Page"
					to={getComponentPath(prevComponent.permalink)}
					search={{ tab: "docs" }}
					params={{ slug: prevComponent.slug }}
				>
					<Button className="flex h-full w-full flex-row justify-between p-md" variant="outline" size="lg">
						<ArrowLeft className="size-3" />
						<div className="flex flex-col items-end">
							<Typography>Previous</Typography>
							<Typography className="text-subtle-foreground">
								{`${prevCategoryTitle ? `${prevCategoryTitle} - ` : ""} ${prevComponent.title}`}
							</Typography>
						</div>
					</Button>
				</Link>
			)}
			{nextComponent && (
				<Link
					className="h-full w-full"
					aria-label="Next Page"
					to={getComponentPath(nextComponent.permalink)}
					search={{ tab: "docs" }}
					params={{ slug: nextComponent.slug }}
				>
					<Button
						aria-label="Next Page"
						className="flex h-full w-full flex-row justify-between p-md"
						size="lg"
						variant="outline"
					>
						<div className="flex flex-col items-start">
							<Typography>Next</Typography>
							<Typography className="text-subtle-foreground">
								{`${nextCategoryTitle ? `${nextCategoryTitle} - ` : ""} ${nextComponent.title}`}
							</Typography>
						</div>
						<ArrowRight className="size-3" />
					</Button>
				</Link>
			)}
		</div>
	)
}
