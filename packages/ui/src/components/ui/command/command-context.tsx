// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { createContext, useContext } from "react"

type CommandContextType = {
	open: boolean
	setOpen: (isOpen: boolean) => void

	searchValue: string | undefined
	setSearchValue: (value: string) => void

	disableIntegratedSearch: boolean
}

export const CommandContext = createContext<CommandContextType>({
	open: false,
	setOpen: () => {},

	searchValue: "",
	setSearchValue: () => {},
	disableIntegratedSearch: false,
})

export function useCommand() {
	const context = useContext(CommandContext)

	if (!context) {
		throw new Error("useCommand must be used within a CommandContextProvider")
	}

	return context
}
