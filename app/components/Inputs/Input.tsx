import type { HTMLInputTypeAttribute } from 'react';
import React from 'react';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	type: HTMLInputTypeAttribute | undefined;
	name: string;
	placeholder?: string;
}

export default React.forwardRef(function Input(
	{ type, name, placeholder, className, ...props }: InputProps,
	ref: React.Ref<HTMLInputElement>
) {
	return (
		<input
			ref={ref}
			type={type}
			name={name}
			placeholder={placeholder}
			className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green-300 ${className}`}
			{...props}
		/>
	);
});
