import { If, Input, Label } from "@pixelshades/ui/components"
import { DeleteIcon } from "@pixelshades/ui/icons"
import { type ChangeEvent, useState } from "react"
import { FormControl, FormItem, FormMessage } from "../commons/hook-form"
import type { AutoFormInputComponentProps } from "../types"
export default function AutoFormFile({
	label,
	isRequired,
	fieldConfigItem,
	fieldProps,
	field,
}: AutoFormInputComponentProps) {
	const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps
	const showLabel = _showLabel === undefined ? true : _showLabel
	const [file, setFile] = useState<string | null>(null)
	const [fileName, setFileName] = useState<string | null>(null)
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setFile(reader.result as string)
				setFileName(file.name)
				field.onChange(reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}

	const handleRemoveClick = () => {
		setFile(null)
	}

	return (
		<FormItem>
			<If condition={showLabel}>
				<Label isRequired={isRequired} tooltip={fieldConfigItem.description}>
					{label}
				</Label>
			</If>
			{!file && (
				<FormControl>
					<Input type="file" {...fieldPropsWithoutShowLabel} onChange={handleFileChange} value={""} />
				</FormControl>
			)}
			{file && (
				<div className="flex h-[40px] w-full flex-row items-center justify-between space-x-md rounded-sm border bg-background p-md text-foreground dark:focus-visible:ring-0 focus-visible:ring-0 dark:focus-visible:ring-offset-0 focus-visible:ring-offset-0">
					<p>{fileName}</p>
					<button type="button" onClick={handleRemoveClick} aria-label="Remove image">
						<DeleteIcon size={16} />
					</button>
				</div>
			)}
			<FormMessage />
		</FormItem>
	)
}
