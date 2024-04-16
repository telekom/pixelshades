import {
	Column as AriaColumn,
	Table as AriaTable,
	TableBody as AriaTableBody,
	type TableProps as AriaTableProps,
	TableHeader as AriaTableheader,
	Cell,
	type CellProps,
	Collection,
	type ColumnProps,
	Row,
	type RowProps,
	type TableHeaderProps,
	useTableOptions,
} from "react-aria-components"

import { tableVariants } from "@dv/styles/components/table"
import { ChevronDown, ChevronUp, Menu } from "lucide-react"
import { Button } from "../button"
import { Checkbox } from "../checkbox"

const { root, header, column, row, cell } = tableVariants()

const TableBody = AriaTableBody

export type TableProps = AriaTableProps & {
	className?: string
}

const Table = ({ children, className, ...props }: TableProps) => (
	<AriaTable {...props} className={root({ className })}>
		{children}
	</AriaTable>
)

const TableCell = ({ children, className, ...props }: CellProps & { className?: string }) => (
	<Cell {...props} className={cell({ className })}>
		{children}
	</Cell>
)

const TableColumn = ({ children, className, ...props }: ColumnProps & { className?: string }) => (
	<AriaColumn {...props} className={column({ className })}>
		{({ allowsSorting, sortDirection }) => (
			<div className="flex items-center gap-md">
				<>
					{children}
					{allowsSorting &&
						(sortDirection === undefined ? (
							<div className="w-6" />
						) : sortDirection === "ascending" ? (
							<ChevronUp />
						) : (
							<ChevronDown />
						))}
				</>
			</div>
		)}
	</AriaColumn>
)

const TableHeader = <T extends object>({
	children,
	className,
	columns,
	...props
}: TableHeaderProps<T> & { className?: string }) => {
	const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()
	return (
		<AriaTableheader {...props} className={header()}>
			{/* Add extra columns for drag and drop and selection. */}
			{allowsDragging && <TableColumn />}
			{selectionBehavior === "toggle" && (
				<TableColumn>{selectionMode === "multiple" && <Checkbox slot="selection" />}</TableColumn>
			)}
			<Collection items={columns}>{children}</Collection>
		</AriaTableheader>
	)
}

const TableRow = <T extends object>({
	children,
	className,
	columns,
	id,
	...props
}: RowProps<T> & { className?: string }) => {
	const { selectionBehavior, allowsDragging } = useTableOptions()
	return (
		<Row id={id} {...props} className={row({ className })}>
			{allowsDragging && (
				<Cell className="ring-focus data-[focus-visible]:ring-2">
					<Button className="bg-transparent" slot="drag">
						<Menu className="h-4 w-4 text-fg" />
					</Button>
				</Cell>
			)}
			{selectionBehavior === "toggle" && (
				<Cell className="">
					<Checkbox slot="selection" />
				</Cell>
			)}
			<Collection items={columns}>{children}</Collection>
		</Row>
	)
}

export { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow }
