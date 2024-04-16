import { dataListVariants } from "@dv/styles/components/data-list"
import type { HTMLAttributes } from "react"
import { createStyleContext } from "../../../utils/create-style-context"
import { forwardRef } from "../../../utils/jsx"

export type DataListProps = HTMLAttributes<HTMLDListElement>

const { withContext, withProvider } = createStyleContext(dataListVariants)

const UnstyledDataList = forwardRef((props: DataListProps) => {
	return <dl {...props} />
})

export type DataListItemProps = HTMLAttributes<HTMLDivElement>

const UnstyledDataListItem = forwardRef((props: DataListItemProps) => {
	return <div {...props} />
})

export type DataListLabelProps = HTMLAttributes<HTMLElement>

const UnstyledDataListLabel = forwardRef((props: DataListLabelProps) => {
	return <dt {...props} />
})

export type DataListValueProps = HTMLAttributes<HTMLElement>

const UnstyledDataListValue = forwardRef(({ ...props }: DataListValueProps) => {
	return <dd {...props} />
})

const DataList = withProvider(UnstyledDataList, "root")
const DataListItem = withContext(UnstyledDataListItem, "item")
const DataListLabel = withContext(UnstyledDataListLabel, "label")
const DataListValue = withContext(UnstyledDataListValue, "value")

export { DataList, DataListItem, DataListLabel, DataListValue }