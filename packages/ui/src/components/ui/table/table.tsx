"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import {
	Cell as AriaCell,
	type CellProps as AriaCellProps,
	Column as AriaColumn,
	ResizableTableContainer as AriaResizableTableContainer,
	Row as AriaRow,
	Table as AriaTable,
	TableBody as AriaTableBody,
	TableHeader as AriaTableHeader,
	type TableProps as AriaTableProps,
	Collection,
	type ColumnProps,
	Group,
	type RowProps,
	type TableHeaderProps,
	composeRenderProps,
	useTableOptions,
} from "react-aria-components"

import { cn } from "@pixelshades/cn"
import { tableVariants } from "@pixelshades/styles/components/table"
import { IconChevronUp } from "@tabler/icons-react"
import { Button } from "../button"
import { Checkbox } from "../checkbox"

const { header, column, row, root, table, columnRoot, cell } = tableVariants()

export type TableProps = AriaTableProps

export function TableRoot(props: TableProps) {
	return (
		<AriaResizableTableContainer className={root()}>
			<AriaTable {...props} className={table()} />
		</AriaResizableTableContainer>
	)
}

function TableColumn(props: ColumnProps) {
	return (
		<AriaColumn {...props} className={cn(props.className, columnRoot())}>
			{composeRenderProps(props.children, (children, { allowsSorting, sortDirection }) => (
				<div className="flex items-center">
					<Group role="presentation" tabIndex={-1} className={column()}>
						<span className="truncate">{children}</span>
						{allowsSorting && (
							<span
								className={cn("flex size-4 items-center justify-center transition", {
									"rotate-180": sortDirection === "descending",
								})}
							>
								{sortDirection && (
									<IconChevronUp
										aria-hidden
										className="size-4 text-subtle-foreground forced-colors:text-[ButtonText]"
									/>
								)}
							</span>
						)}
					</Group>
					{/* {!props.width && <ColumnResizer className={resizerStyles} />} */}
				</div>
			))}
		</AriaColumn>
	)
}

const TableBody = AriaTableBody

function TableHeader<T extends object>(props: TableHeaderProps<T>) {
	const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

	return (
		<AriaTableHeader {...props} className={cn(header(), props.className)}>
			{/* Add extra columns for drag and drop and selection. */}
			{allowsDragging && <TableColumn />}
			{selectionBehavior === "toggle" && (
				<AriaColumn width={36} minWidth={36} className="cursor-default p-md text-start font-semibold text-sm">
					{selectionMode === "multiple" && <Checkbox slot="selection" />}
				</AriaColumn>
			)}
			<Collection items={props.columns}>{props.children}</Collection>
		</AriaTableHeader>
	)
}

function TableRow<T extends object>({ id, columns, children, ...otherProps }: RowProps<T>) {
	const { selectionBehavior, allowsDragging } = useTableOptions()

	return (
		<AriaRow id={id} {...otherProps} className={row()}>
			{allowsDragging && (
				<TableCell>
					<Button slot="drag">≡</Button>
				</TableCell>
			)}
			{selectionBehavior === "toggle" && (
				<TableCell>
					<Checkbox slot="selection" />
				</TableCell>
			)}
			<Collection items={columns}>{children}</Collection>
		</AriaRow>
	)
}

function TableCell(props: AriaCellProps) {
	return <AriaCell {...props} className={cell()} />
}

export const Table = Object.assign(TableRoot, {
	Body: TableBody,
	Cell: TableCell,
	Column: TableColumn,
	Header: TableHeader,
	Row: TableRow,
})

export { TableBody, TableCell, TableColumn, TableHeader, TableRow }
