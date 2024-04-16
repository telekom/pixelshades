import { createContext } from "react"
import type { HeadingLevels } from "./heading"

export const HeadingContext = createContext<HeadingLevels | 0>(0)
