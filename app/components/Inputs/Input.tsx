import type { HTMLInputTypeAttribute } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type: HTMLInputTypeAttribute | undefined;
	name: string;
	placeholder?: string;
}

export function Input({
	type,
	name,
	placeholder,
	className,
	...props
}: InputProps) {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green-300 ${className}`}
			{...props}
		/>
	);
}
