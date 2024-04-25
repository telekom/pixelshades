"use client"

// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { createContext } from "react"
import type { HeadingLevels } from "./heading"

export const HeadingContext = createContext<HeadingLevels | 0>(0)
