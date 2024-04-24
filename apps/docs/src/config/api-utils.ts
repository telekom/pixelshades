export type LabelDocsParams = {
	children?: boolean;
	required?: boolean;
	disabled?: boolean;
	before?: boolean;
	after?: boolean;
	asChild?: boolean;
};

export const createLabelDocs = ({ children, required, disabled, before, after, asChild }: LabelDocsParams) => {
	const components = [];

	if (asChild) {
		components.push([
			{
				value: "asChild",
				description:
					"Change the default rendered element for the one passed as a child, merging their props and behavior.",
			},
			{ value: "boolean" },
			{ value: "false" },
		]);
	}

	if (children) {
		components.push([
			{
				value: "children",
				description: "The children of the component.",
			},
			{ value: "ReactNode" },
			{},
		]);
	}

	if (disabled) {
		components.push([
			{
				value: "disabled",
				description:
					"When `true` indicates that the Element is disabled and will apply additional styles to make that visually clear.",
			},
			{
				value: "boolean",
			},
			{ value: "false" },
		]);
	}

	if (before) {
		components.push([
			{
				value: "before",
				description: "The slot to be rendered before the component.",
			},
			{
				value: "ReactNode",
			},
			{},
		]);
	}

	if (after) {
		components.push([
			{
				value: "after",
				description: "The slot to be rendered after the component.",
			},
			{
				value: "ReactNode",
			},
			{},
		]);
	}

	return components;
};
