import { Button, Separator } from "@pixelshades/ui/components"
import { DeleteIcon, PlusIcon } from "@pixelshades/ui/icons"
import { useFieldArray, type useForm } from "react-hook-form"
import * as z from "zod"
import { AccordionContent, AccordionItem, AccordionTrigger } from "../commons/temp/accordion"
import { beautifyObjectName } from "../utils"
import AutoFormObject from "./object"

function isZodArray(item: z.ZodArray<any> | z.ZodDefault<any>): item is z.ZodArray<any> {
	return item instanceof z.ZodArray
}

function isZodDefault(item: z.ZodArray<any> | z.ZodDefault<any>): item is z.ZodDefault<any> {
	return item instanceof z.ZodDefault
}

export default function AutoFormArray({
	name,
	item,
	form,
	path = [],
	fieldConfig,
}: {
	name: string
	item: z.ZodArray<any> | z.ZodDefault<any>
	form: ReturnType<typeof useForm>
	path?: string[]
	fieldConfig?: any
}) {
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name,
	})
	const title = item._def.description ?? beautifyObjectName(name)

	const itemDefType = isZodArray(item) ? item._def.type : isZodDefault(item) ? item._def.innerType._def.type : null

	return (
		<AccordionItem value={name} className="border-none">
			<AccordionTrigger>{title}</AccordionTrigger>
			<AccordionContent>
				{fields.map((_field, index) => {
					const key = _field.id
					return (
						<div className="mt-4 flex flex-col" key={`${key}`}>
							<AutoFormObject
								schema={itemDefType as z.ZodObject<any, any>}
								form={form}
								fieldConfig={fieldConfig}
								path={[...path, index.toString()]}
							/>
							<div className="my-4 flex justify-end">
								<Button
									variant="outline"
									size="icon"
									type="button"
									className="dark:bg-white dark:hover:bg-zinc-300 hover:bg-zinc-300 dark:hover:text-black dark:text-black hover:text-black dark:focus-visible:ring-0 dark:hover:ring-0 focus-visible:ring-0 focus:ring-0 dark:focus-visible:ring-offset-0 dark:hover:ring-offset-0 focus-visible:ring-offset-0 focus:ring-offset-0"
									onPress={() => remove(index)}
								>
									<DeleteIcon className="size-4" />
								</Button>
							</div>

							<Separator />
						</div>
					)
				})}
				<Button
					before={<PlusIcon className="size-4" />}
					type="button"
					variant="outline"
					onPress={() => append({})}
					className="mt-4 flex items-center"
				>
					Add
				</Button>
			</AccordionContent>
		</AccordionItem>
	)
}
