import {
	Button,
	If,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	type TableProps,
	TableRow,
	Tooltip,
	TooltipContent,
	TooltipRoot,
} from "@dv/ui/components"
import { InfoIcon } from "@dv/ui/icons"
import { cn } from "@dv/ui/utils"
import { forwardRef, useMemo } from "react"
import { type LabelDocsParams, createLabelDocs } from "~/config/api-utils"

type ContentItem = {
	value: string
	description?: string
}

type SortProps = {
	sort: true
	content: [ContentItem, { value: React.ReactNode }][]
}

type NoSortProps = {
	sort?: false
	content: [ContentItem, ContentItem, ContentItem][]
}

export const ApiTable = forwardRef<
	HTMLTableElement,
	TableProps & {
		content: [ContentItem, ContentItem, ContentItem][]
		isData?: boolean
		isOptions?: boolean
		isUtility?: boolean
		sort?: boolean
		includeCommonDocs?: LabelDocsParams
	} & (SortProps | NoSortProps)
>(
	(
		{ content, isData = false, isOptions = false, isUtility = false, sort = true, includeCommonDocs, ...props },
		ref,
	) => {
		const {
			children = false,
			required = false,
			disabled = false,
			before = false,
			after = false,
			asChild = false,
		} = includeCommonDocs ?? {}

		const labelDocs = createLabelDocs({
			children,
			required,
			disabled,
			before,
			after,
			asChild,
		})

		// Sort the content array
		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		const sortedContent = useMemo(() => {
			if (sort) {
				const returnContent = [...labelDocs]
				returnContent.push(
					...[...content].sort((a, b) => {
						const aValue = a[0].value
						const bValue = b[0].value

						return aValue?.toString().localeCompare(bValue.toString())
					}),
				)

				return returnContent
			}

			return [...labelDocs, ...content]
		}, [content, sort])

		return (
			<Table className={"overflow-x-auto"} aria-label="Api Reference" {...props}>
				<TableHeader>
					<TableColumn isRowHeader>
						{isData ? "Data attribute" : isOptions ? "Option" : isUtility ? "Class" : "Prop"}
					</TableColumn>
					<TableColumn>{isUtility ? "Value" : "Values"}</TableColumn>

					<If condition={!isData && !isUtility}>
						<TableColumn>Default</TableColumn>
					</If>
				</TableHeader>
				<TableBody>
					{sortedContent?.map((row, index) => (
						<TableRow key={index} className="border-border border-b-4">
							{row.map((rowItem, rowIndex) => (
								<TableCell
									className={cn(rowIndex === 0 && "sm:w-48", "min-w-0")}
									key={`${rowIndex}-${index}`}
								>
									<div className="flex items-center gap-xs">
										<If
											condition={rowItem.value}
											fallback={<span className="select-none text-subtle-foreground">null</span>}
										>
											<If
												condition={
													typeof rowItem?.value === "string" &&
													rowItem?.value?.includes("Present")
												}
												fallback={
													<code className="not-prose relative break-words rounded bg-background/70 px-[0.3rem] py-[0.15rem] font-mono text-[13px] text-foreground text-xs [&>div]:flex [&>div]:flex-col [&:has(div)]:bg-transparent">
														{rowItem.value}
													</code>
												}
											>
												<span className="text-sm">{rowItem.value}</span>
											</If>
										</If>

										<If condition={rowItem.description}>
											<Tooltip>{rowItem.description!}</Tooltip>
										</If>
									</div>
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		)
	},
)

ApiTable.displayName = "PropsTable"
