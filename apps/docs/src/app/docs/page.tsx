import { redirect } from "next/navigation"

export default function Page() {
	redirect("/docs/getting_started/introduction")

	return <main className="pt-layout-sm">Page</main>
}
