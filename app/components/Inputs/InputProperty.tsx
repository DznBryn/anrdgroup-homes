import { useState } from 'react';
import type { InputProps } from './Input';
import { Input } from './Input';

interface InputPropertyProps extends InputProps {}

export function InputProperty({ ...props }: InputPropertyProps) {
	const [address, setAddress] = useState({
		inputValue: '',
		formatAddress: {
      street: '',
      city: '',
      state: '',
      country: '',
      zip: ''
    },
		error: '',
	});
	function formatAddress() {
		const inputValue = address.inputValue.trim();
		if (inputValue === '' || inputValue === ' ' || inputValue.indexOf(',') === -1) {
			setAddress({
				...address,
				formatAddress: {
          street: '',
          city: '',
          state: '',
          country: '',
          zip: ''
        },
				error:
					'Please enter a valid property address in the format "Street, City, State, Country, Zip"',
			});
			return;
		} else {
			const splitAddress = inputValue.split(',');
			const street = splitAddress?.[0]?.trim();
			const city = splitAddress?.[1]?.trim();
			const state = splitAddress?.[2]?.trim();
			const country = splitAddress?.[3]?.trim();
			const zip = splitAddress?.[4]?.trim();
			setAddress({
				...address,
				formatAddress:{
          street,
          city,
          state,
          country,
          zip
        },
				error: '',
			});
		}
	}
	return (
		<div className='w-full'>
			<Input
				onBlur={formatAddress}
				onChange={(e) =>
					setAddress({
						...address,
						inputValue: e.target.value,
					})
				}
				autoComplete={'true'}
				{...props}
			/>
			<p className='text-red italic'>
				<small>{address.error}</small>
			</p>
		</div>
	);
}
