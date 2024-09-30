import React from "react"

import { Avatar } from "@pixelshades/ui/components"

export default function Example() {
	return (
		<div className="flex flex-col gap-md md:flex-row">
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="xxs"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="xs"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="sm"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="md"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="lg"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="xl"
			/>
			<Avatar
				src="https://pbs.twimg.com/profile_images/1271783863614873600/DozTdIj7_400x400.jpg"
				alt="@makisuo__"
				size="2xl"
			/>
		</div>
	)
}
