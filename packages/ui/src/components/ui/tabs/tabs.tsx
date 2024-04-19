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
import { createStyleContext } from "../../../utils/create-style-context"

const { withContext, withProvider } = createStyleContext(tabsVariants)

const Tabs = withProvider(AriaTabsRoot, "root")

const TabsList = withContext(AriaTabList, "list")

const Tab = withContext(AriaTab, "tab")
const TabPanel = withContext(AriaTabPanel, "panel")

export type { TabListProps, TabPanelProps, TabProps, TabsProps }

export { Tabs, TabsList, Tab, TabPanel }
