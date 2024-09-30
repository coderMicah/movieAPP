import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateTMDBImageUrl(imagePath: string, size: ImageSize = 'w500'): string {
  const baseUrl = 'https://image.tmdb.org/t/p/';
  
  if (!imagePath) {
    return ""
    // throw new Error("Image path is required to generate a URL.");
  }

  return `${baseUrl}${size}${imagePath}`;
}
