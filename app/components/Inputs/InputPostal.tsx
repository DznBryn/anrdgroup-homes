import React, { useState } from 'react'
import type { InputProps } from './Input';
import Input from './Input';

interface Props extends InputProps{}

export default function InputPostal({...props}: Props) {
  const [postal, setPostal] = useState('');
	function handlePostalFormat(e: React.ChangeEvent<HTMLInputElement>) {
		const cleaned = e.target.value.replace(/\D/g, '');
		return setPostal(cleaned);
	}
	return (
		<Input onChange={(e) => handlePostalFormat(e)} value={postal} {...props} />
	);
}