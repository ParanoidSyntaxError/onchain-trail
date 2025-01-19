import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function clamp(value: number, min: number, max: number) {
	return Math.min(Math.max(value, min), max);
}

export function toTitleCase(value: string) {
	return value.toLowerCase().split(' ').map((word: string) => {
		return (word.charAt(0).toUpperCase() + word.slice(1));
	}).join(' ');
}