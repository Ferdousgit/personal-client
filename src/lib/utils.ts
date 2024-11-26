import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubString = (value: string, index: number): string => {
  return value.length > index ? `${value.substring(0, index)}...` : value;
};

export const extractFileId = (driveUrl: string): string | null => {
  const match = driveUrl.match(/\/d\/([^\/]+)/);
  return match ? match[1] : null;
};
