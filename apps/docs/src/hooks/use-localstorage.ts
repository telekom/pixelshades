import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
	const [storedValue, setStoredValue] = useState<T>(initialValue)

	useEffect(() => {
		// Get from local storage then
		// parse stored json or return initialValue
		const item = window.localStorage.getItem(key)
		if (item) {
			try {
				setStoredValue(JSON.parse(item))
			} catch (error) {
				console.log(error)
			}
		}
	}, [key])

	const setValue = (value: T) => {
		// Save state
		setStoredValue(value)
		// Save to local storage
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	return [storedValue, setValue]
}
