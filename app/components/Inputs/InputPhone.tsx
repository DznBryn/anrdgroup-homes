import React, { useState } from 'react';
import type { InputProps } from './Input';
import Input from './Input';

interface Props extends InputProps {}

export default function InputPhone({ ...props }: Props) {
	const [phone, setPhone] = useState('');
	function handlePhoneFormat(e: React.ChangeEvent<HTMLInputElement>) {
		// Remove all non-digit characters
		const cleaned = e.target.value.replace(/\D/g, '');
		const formattedPhoneNumber = cleaned.slice(0, 10);
		let formatted = '';
		for (let i = 1; i <= 10; i++) {
			if (i <= cleaned.length) {
				formatted += formattedPhoneNumber[i - 1];
				if ( i === 3 || i === 6) {
					formatted += '-';
				}
			}
		}
		return setPhone(formatted);
	}
	return (
		<Input onChange={(e) => handlePhoneFormat(e)} value={phone} {...props} />
	);
}
