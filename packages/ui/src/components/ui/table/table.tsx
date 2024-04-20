"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import {
	Cell as AriaCell,
	type CellProps as AriaCellProps,
	Column as AriaColumn,
	Table as AriaTable,
	TableBody as AriaTableBody,
	type TableProps as AriaTableProps,
	TableHeader as AriaTableheader,
	Collection,
	type ColumnProps,
	Row,
	type RowProps,
	type TableHeaderProps,
	useTableOptions,
} from "react-aria-components"

import { tableVariants } from "@pixelshades/styles/components/table"
import { ChevronDown, ChevronUp, Menu } from "lucide-react"
import { createStyleContext } from "../../../utils/create-style-context"
import { Button } from "../button"
import { Checkbox } from "../checkbox"

const { header, column, row } = tableVariants()

const { withContext, withProvider } = createStyleContext(tableVariants)

const TableBody = AriaTableBody

export type TableProps = AriaTableProps

const Table = withProvider(AriaTable, "root")

export type TableCellProps = AriaCellProps

const TableCell = withContext(AriaCell, "cell")

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
				<AriaCell className="ring-focus data-[focus-visible]:ring-2">
					<Button className="bg-transparent" slot="drag">
						<Menu className="size-4 text-foreground" />
					</Button>
				</AriaCell>
			)}
			{selectionBehavior === "toggle" && (
				<AriaCell>
					<Checkbox slot="selection" />
				</AriaCell>
			)}
			<Collection items={columns}>{children}</Collection>
		</Row>
	)
}

export { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow }
