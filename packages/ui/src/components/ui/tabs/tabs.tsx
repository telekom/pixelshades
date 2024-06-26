"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import {
	Tab as AriaTab,
	TabList as AriaTabList,
	TabPanel as AriaTabPanel,
	Tabs as AriaTabsRoot,
	type TabListProps,
	type TabPanelProps,
	type TabProps,
	type TabsProps,
} from "react-aria-components"

import { tabsVariants } from "@pixelshades/styles/components/tabs"
import { createStyleContext } from "@pixelshades/utils/styles"

const { withContext, withProvider } = createStyleContext(tabsVariants)

const TabsRoot = withProvider(AriaTabsRoot, "root")

const TabsList = withContext(AriaTabList, "list")

const Tab = withContext(AriaTab, "tab")
const TabPanel = withContext(AriaTabPanel, "panel")

export type { TabListProps, TabPanelProps, TabProps, TabsProps }

export const Tabs = Object.assign(TabsRoot, {
	Tab: Tab,
	List: TabsList,
	Panel: TabPanel,
})

export { TabsList, TabPanel, Tab }
