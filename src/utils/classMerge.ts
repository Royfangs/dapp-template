import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classMerge = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
