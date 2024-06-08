import { Button, Separator } from "@pixelshades/ui/components"
import { IconPlus, IconTrash } from "@pixelshades/ui/icons"
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
						<div className="mt-lg flex flex-col" key={`${key}`}>
							<AutoFormObject
								schema={itemDefType as z.ZodObject<any, any>}
								form={form}
								fieldConfig={fieldConfig}
								path={[...path, index.toString()]}
							/>
							<div className="my-lg flex justify-end">
								<Button variant="outline" size="icon" type="button" onPress={() => remove(index)}>
									<IconTrash className="size-4" />
								</Button>
							</div>

							<Separator />
						</div>
					)
				})}
				<Button
					before={<IconPlus className="size-4" />}
					type="button"
					variant="outline"
					onPress={() => append({})}
					className="mt-lg flex items-center"
				>
					Add
				</Button>
			</AccordionContent>
		</AccordionItem>
	)
}
