// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { resolver } from "react-docgen"

function findExportedComponents(source, filePath) {
	const componentDefinitions = resolver.findAllComponentDefinitions(source, filePath)
	return componentDefinitions.map(({ componentDefinition }) => componentDefinition)
}

export default {
	findExportedComponents,
}
